import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FactDocumentService } from 'src/app/services/fact-document/fact-document.service';

@Component({
  selector: 'app-document-resume',
  templateUrl: './document-resume.component.html',
  styleUrls: ['./document-resume.component.scss']
})
export class DocumentResumeComponent implements OnInit {

  selectedClient = [] as any
  generatedDoc = ""


  constructor(public factDocService: FactDocumentService, private router: Router, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.Calcul()
    this.getSelectedClient()
  }

  cancelButtonAndDestroy() {
    this.factDocService.formFirst.reset()
    this.factDocService.articles = []
    this.factDocService.formAddArticle.reset()
  }

  Calcul(){
    /** SubTotal sans TVA */
    const subTotal = this.getArraySum(this.factDocService.articles).tot_prix
    this.factDocService.subtotal = subTotal

    /** Total with TVA */
    if(this.factDocService.tva_checked == true) {
      const tva_global = this.factDocService.formFirst.controls.globaltva_value.value 
      this.factDocService.tva_global = tva_global
      const tva_total = parseFloat((tva_global*subTotal/100).toFixed(2))
      this.factDocService.tva_total = tva_total
      this.factDocService.totalFacture = parseFloat((subTotal+tva_total).toFixed(2))
    } else {
      const tva_total_div = this.getArraySum(this.factDocService.articles).tva_tot
      this.factDocService.tva_total = tva_total_div
      this.factDocService.totalFacture = parseFloat((subTotal+tva_total_div).toFixed(2))
    }
  }

  getArraySum(a: any){
    var tot_prix =0
    var sum=0;
    var tva_tot=0
    for(var i in a) { 
        sum += a[i].total;
        tot_prix += a[i].prix;
        tva_tot += a[i].tva*a[i].prix
    }
    return {sum,tot_prix,tva_tot:tva_tot/100};
  }

  toggle(event: any){
    this.factDocService.emailCheck = event
  }

  getSelectedClient(){
    this.factDocService.get_selected_client().subscribe((result) => {
      const client = JSON.parse(JSON.stringify(result));
      this.selectedClient = client
    }, (error) => {
      console.log(error)
    })
  }

  onClickGenerate(targetModal: any){
    this.modalService.open(targetModal, {
      backdrop: 'static',
      size: 'lg'
    });
  }

  GeneratePDF() {
    this.factDocService.generate_document().subscribe((generatedDocument) => {
      const document = JSON.parse(generatedDocument)
      const pdfLink = document.documentLink
      if (document.type == 'Facture') {
        saveAs(pdfLink, `Facture - ${document.client_name}`);
      } else {
        saveAs(pdfLink, `Devis - ${document.client_name}`)
      }
      this.modalService.dismissAll()
      this.router.navigate(['/dashboard/facturation/list-fact-documents'])
    }, (error) => {
      console.log(error)
    })
  }

}
