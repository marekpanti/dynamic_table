"use strict";(self.webpackChunkdynamicTable=self.webpackChunkdynamicTable||[]).push([[820],{7820:(et,_,c)=>{c.r(_),c.d(_,{TableModule:()=>V});var r=c(4006),h=c(5932);const x=["id","firstName","lastName","account","actions"];var d=c(5412),t=c(4650),u=c(6895),p=c(4859),g=c(3546);function w(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"div",4),t.NdJ("click",function(){const l=t.CHM(e).index,s=t.oxw(2);return t.KtG(s.switchPosition(l))}),t._uU(1),t.qZA()}if(2&n){const e=a.$implicit,o=a.index,i=t.oxw(2);t.ekj("selected",o===i.currentColumnIndex),t.xp6(1),t.AsE(" ",o," : ",e," ")}}function Z(n,a){if(1&n&&(t.TgZ(0,"mat-card"),t.YNc(1,w,2,4,"div",3),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.data)}}let v=(()=>{class n{constructor(e,o){this.dialogRef=e,this.data=o,this.currentColumnIndex=null,this.newPositionColumnIndex=null}switchPosition(e){if(null===this.currentColumnIndex)this.currentColumnIndex=e;else{this.newPositionColumnIndex=e;const o=this.data[this.newPositionColumnIndex];this.data[this.newPositionColumnIndex]=this.data[this.currentColumnIndex],this.data[this.currentColumnIndex]=o,this.currentColumnIndex=null,this.newPositionColumnIndex=null}}close(){this.dialogRef.close(null)}save(){this.dialogRef.close([...this.data])}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(d.so),t.Y36(d.WI))},n.\u0275cmp=t.Xpm({type:n,selectors:[["column-order"]],decls:9,vars:1,consts:[[4,"ngIf"],["mat-button","",3,"click"],["mat-raised-button","","color","primary",3,"click"],["class","item",3,"selected","click",4,"ngFor","ngForOf"],[1,"item",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"h2"),t._uU(1,"Switch column positions"),t.qZA(),t.TgZ(2,"p"),t._uU(3,"Select your first column which you would like to switch, then select its new position."),t.qZA(),t.YNc(4,Z,2,1,"mat-card",0),t.TgZ(5,"button",1),t.NdJ("click",function(){return o.close()}),t._uU(6,"Cancel"),t.qZA(),t.TgZ(7,"button",2),t.NdJ("click",function(){return o.save()}),t._uU(8,"Save"),t.qZA()),2&e&&(t.xp6(4),t.Q6J("ngIf",o.data))},dependencies:[u.sg,u.O5,p.lW,g.a8],styles:[".item[_ngcontent-%COMP%]{padding:.2rem;border:1px solid #9a9a9a;border-radius:5px;margin:.2rem;font-size:14px;font-weight:700}.item[_ngcontent-%COMP%]:active{background:#ebebeb}.selected[_ngcontent-%COMP%]{background:rgb(173,173,173)}mat-card[_ngcontent-%COMP%]{margin:1rem auto}"]}),n})();function y(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"div",4),t.NdJ("click",function(){const l=t.CHM(e).index,s=t.oxw(2);return t.KtG(s.change(l))}),t._uU(1),t.qZA()}if(2&n){const e=a.$implicit,o=a.index,i=t.oxw(2);t.ekj("selected",o===i.currentColumnIndex),t.xp6(1),t.AsE(" ",o," : ",e," ")}}function N(n,a){if(1&n&&(t.TgZ(0,"mat-card"),t.YNc(1,y,2,4,"div",3),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.data)}}let I=(()=>{class n{constructor(e,o){this.dialogRef=e,this.data=o,this.currentColumnIndex=null,this.newPositionColumnIndex=null}change(e){null===this.currentColumnIndex?this.currentColumnIndex=e:(this.newPositionColumnIndex=e,this.data=this.immutableReorder(this.data,this.currentColumnIndex,this.newPositionColumnIndex),this.currentColumnIndex=null,this.newPositionColumnIndex=null)}immutableReorder(e,o,i){return e.reduce((l,s,f,tt)=>(o===i&&l.push(s),f===o||(o<i&&l.push(s),f===i&&l.push(tt[o]),o>i&&l.push(s)),l),[])}close(){this.dialogRef.close(null)}save(){this.dialogRef.close([...this.data])}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(d.so),t.Y36(d.WI))},n.\u0275cmp=t.Xpm({type:n,selectors:[["reorder-order"]],decls:9,vars:1,consts:[[4,"ngIf"],["mat-button","",3,"click"],["mat-raised-button","","color","primary",3,"click"],["class","item",3,"selected","click",4,"ngFor","ngForOf"],[1,"item",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"h2"),t._uU(1,"Switch column positions"),t.qZA(),t.TgZ(2,"p"),t._uU(3,"Select your first column, then position where you would like to put it."),t.qZA(),t.YNc(4,N,2,1,"mat-card",0),t.TgZ(5,"button",1),t.NdJ("click",function(){return o.close()}),t._uU(6,"Cancel"),t.qZA(),t.TgZ(7,"button",2),t.NdJ("click",function(){return o.save()}),t._uU(8,"Save"),t.qZA()),2&e&&(t.xp6(4),t.Q6J("ngIf",o.data))},dependencies:[u.sg,u.O5,p.lW,g.a8],styles:[".item[_ngcontent-%COMP%]{padding:.2rem;border:1px solid #9a9a9a;border-radius:5px;margin:.2rem;font-size:14px;font-weight:700}.item[_ngcontent-%COMP%]:active{background:#ebebeb}.selected[_ngcontent-%COMP%]{background:rgb(173,173,173)}mat-card[_ngcontent-%COMP%]{margin:1rem auto}"]}),n})();var A=c(5762),C=c(1086);let T=(()=>{class n extends A.ObservableStore{constructor(){super({trackStateHistory:!0}),this.setState({table:[],timeOuts:{}},"INIT_STATE")}get(){const{table:e}=this.getState();return(0,C.of)(e||null)}add(e){let o=this.getState().table,i=null;o.find((s,f)=>(i=f,s.id===e.id))?o[i]={...e}:o=[...o,e],this.setState({table:o},"ADD_ROW_TO_TABLE")}changeUndoState(e){let o=this.getState().table;const i=o.findIndex(l=>l.id===e);o[i].showUndo=!o[i].showUndo,this.setState({table:o},"CHANGE_UNDO_STATE")}removeRow(e){let o=this.getState().table;const i=o.findIndex(l=>l.id===e);o.splice(i,1),this.setState({table:o},"REMOVE_ROW_ID")}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var R=c(4850);let S=(()=>{class n{precise(e){return Math.round(parseFloat((e*Math.pow(10,5)).toFixed(5)))/Math.pow(10,5)}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),b=(()=>{class n{constructor(e,o){this.store=e,this.tableService=o,this.timeOuts={}}removeRow(e){this.store.changeUndoState(e),this.timeOuts[e]=setTimeout(()=>{this.store.removeRow(e)},3e3)}addToStore(e){const o={...e,showUndo:!1};this.store.add(o)}undoRemove(e){clearTimeout(this.timeOuts[e]),this.store.changeUndoState(e),this.timeOuts[e]=null}calculateTotalAccounts(){return this.store.stateChanged.pipe((0,R.U)(e=>{let i,o=0;if(e.table.length>0){i=e.table.map(l=>l.account);for(let l in i)o=this.tableService.precise(o+i[l])}return o}))}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(T),t.LFG(S))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var O=c(3336),k=c(9549),U=c(4144),m=c(671);let D=(()=>{class n{constructor(e){this.facade=e,this.finalCalcul$=this.facade.calculateTotalAccounts()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(b))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-summary"]],decls:5,vars:3,template:function(e,o){1&e&&(t.TgZ(0,"p"),t._uU(1,"Together in all accounts: "),t.TgZ(2,"strong"),t._uU(3),t.ALo(4,"async"),t.qZA()()),2&e&&(t.xp6(3),t.Oqu(t.lcZ(4,1,o.finalCalcul$)))},dependencies:[u.Ov]}),n})();function F(n,a){1&n&&(t.TgZ(0,"th",19),t._uU(1,"ID"),t.qZA())}function J(n,a){if(1&n&&(t.TgZ(0,"td",20),t._uU(1),t.qZA()),2&n){const e=a.$implicit;t.xp6(1),t.Oqu(e.id)}}function M(n,a){1&n&&(t.TgZ(0,"th",19),t._uU(1,"First Name"),t.qZA())}function Y(n,a){1&n&&(t.TgZ(0,"td",21)(1,"mat-form-field"),t._UZ(2,"input",22),t.qZA()()),2&n&&t.Q6J("formGroupName",a.index)}function P(n,a){1&n&&(t.TgZ(0,"th",19),t._uU(1,"Account"),t.qZA())}function q(n,a){1&n&&(t.TgZ(0,"td",21)(1,"mat-form-field"),t._UZ(2,"input",23),t.qZA()()),2&n&&t.Q6J("formGroupName",a.index)}function Q(n,a){1&n&&(t.TgZ(0,"th",19),t._uU(1,"Last Name"),t.qZA())}function G(n,a){1&n&&(t.TgZ(0,"td",21)(1,"mat-form-field"),t._UZ(2,"input",24),t.qZA()()),2&n&&t.Q6J("formGroupName",a.index)}function E(n,a){1&n&&(t.TgZ(0,"th",19),t._uU(1,"actions"),t.qZA())}function B(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"button",29),t.NdJ("click",function(){t.CHM(e);const i=t.oxw().$implicit,l=t.oxw();return t.KtG(l.removeRow(i.id))}),t.TgZ(1,"mat-icon"),t._uU(2,"delete"),t.qZA()()}}function H(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"button",30),t.NdJ("click",function(){t.CHM(e);const i=t.oxw().$implicit,l=t.oxw();return t.KtG(l.undoDelete(i.id))}),t._uU(1," undo "),t.qZA()}}function z(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"td",25)(1,"button",26),t.NdJ("click",function(){const l=t.CHM(e).index,s=t.oxw();return t.KtG(s.saveRow(l))}),t.TgZ(2,"mat-icon"),t._uU(3,"done"),t.qZA()(),t.YNc(4,B,3,0,"button",27),t.YNc(5,H,2,0,"button",28),t.qZA()}if(2&n){const e=a.$implicit,o=a.index,i=t.oxw();t.Q6J("formGroupName",o),t.xp6(1),t.Q6J("disabled",!i.myForm.valid),t.xp6(3),t.Q6J("ngIf",!e.showUndo),t.xp6(1),t.Q6J("ngIf",e.showUndo)}}function $(n,a){1&n&&t._UZ(0,"tr",31)}function W(n,a){1&n&&t._UZ(0,"tr",32)}function j(n,a){1&n&&(t.TgZ(0,"p",33),t._uU(1," Form mast be valid and all fields filled "),t.qZA())}const K=[{path:"",component:(()=>{class n{constructor(e,o,i){this.store=e,this.facade=o,this.dialog=i,this.displayedColumns=x,this.countId=0,this.myForm=new r.cw({testField:new r.NI("testValue"),rows:new r.Oe([this.initRows(0)])})}ngOnInit(){this.saveRow(0),this.store.stateChanged.subscribe(e=>{this.dataSource=e.table})}initRows(e){return new r.cw({firstName:new r.NI("test",r.kI.required),lastName:new r.NI("",r.kI.required),account:new r.NI(null,r.kI.required),id:new r.NI(e)})}openChangeOrderColumnsDialog(){this.dialog.open(v,{width:"400px",data:[...this.displayedColumns]}).afterClosed().subscribe(e=>{e&&(this.displayedColumns=[...e])})}openReorderColumnsDialog(){this.dialog.open(I,{width:"400px",data:[...this.displayedColumns]}).afterClosed().subscribe(e=>{e&&(this.displayedColumns=[...e])})}saveRow(e){this.facade.addToStore(this.myForm.controls.rows.value[e])}removeRow(e){this.facade.removeRow(e)}addRows(){this.countId++,this.myForm.controls.rows.push(this.initRows(this.countId)),this.store.add(this.myForm.controls.rows.value[this.countId])}undoDelete(e){this.facade.undoRemove(e)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(T),t.Y36(b),t.Y36(d.uw))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-table"]],decls:33,vars:6,consts:[[1,"content"],["mat-raised-button","","color","primary",3,"click"],["novalidate","",3,"formGroup"],["matInput","","formControlName","testField",1,"form-control"],["formArrayName","rows"],["mat-table","",1,"table",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","firstName"],["mat-cell","",3,"formGroupName",4,"matCellDef"],["matColumnDef","account"],["matColumnDef","lastName"],["matColumnDef","actions"],["mat-cell","","class","specialcell",3,"formGroupName",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["class","warn",4,"ngIf"],["mat-button","","color","primary",3,"disabled","click"],["mat-header-cell",""],["mat-cell",""],["mat-cell","",3,"formGroupName"],["matInput","","formControlName","firstName",1,"form-control"],["type","number","matInput","","formControlName","account",1,"form-control"],["matInput","","formControlName","lastName",1,"form-control"],["mat-cell","",1,"specialcell",3,"formGroupName"],["mat-icon-button","","aria-label","Save","color","primary",3,"disabled","click"],["mat-icon-button","","color","warn",3,"click",4,"ngIf"],["mat-button","","color","warn",3,"click",4,"ngIf"],["mat-icon-button","","color","warn",3,"click"],["mat-button","","color","warn",3,"click"],["mat-header-row",""],["mat-row",""],[1,"warn"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"h1"),t._uU(2,"Angular's dynamic table - Account Calculator"),t.qZA(),t.TgZ(3,"button",1),t.NdJ("click",function(){return o.openChangeOrderColumnsDialog()}),t._uU(4,"Switch positions of columns"),t.qZA(),t.TgZ(5,"button",1),t.NdJ("click",function(){return o.openReorderColumnsDialog()}),t._uU(6,"Reorder columns"),t.qZA(),t.TgZ(7,"form",2)(8,"mat-form-field"),t._UZ(9,"input",3),t.qZA(),t.TgZ(10,"div",4)(11,"table",5),t.ynx(12,6),t.YNc(13,F,2,0,"th",7),t.YNc(14,J,2,1,"td",8),t.BQk(),t.ynx(15,9),t.YNc(16,M,2,0,"th",7),t.YNc(17,Y,3,1,"td",10),t.BQk(),t.ynx(18,11),t.YNc(19,P,2,0,"th",7),t.YNc(20,q,3,1,"td",10),t.BQk(),t.ynx(21,12),t.YNc(22,Q,2,0,"th",7),t.YNc(23,G,3,1,"td",10),t.BQk(),t.ynx(24,13),t.YNc(25,E,2,0,"th",7),t.YNc(26,z,6,4,"td",14),t.BQk(),t.YNc(27,$,1,0,"tr",15),t.YNc(28,W,1,0,"tr",16),t.qZA(),t.YNc(29,j,2,0,"p",17),t.TgZ(30,"button",18),t.NdJ("click",function(){return o.addRows()}),t._uU(31," Add Row "),t.qZA()()(),t._UZ(32,"app-summary"),t.qZA()),2&e&&(t.xp6(7),t.Q6J("formGroup",o.myForm),t.xp6(4),t.Q6J("dataSource",o.dataSource),t.xp6(16),t.Q6J("matHeaderRowDef",o.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",o.displayedColumns),t.xp6(1),t.Q6J("ngIf",!o.myForm.valid),t.xp6(1),t.Q6J("disabled",!o.myForm.valid))},dependencies:[u.O5,r._Y,r.Fj,r.wV,r.JJ,r.JL,r.sg,r.u,r.x0,r.CE,p.lW,O.Hw,k.KE,U.Nt,m.BZ,m.fO,m.as,m.w1,m.Dz,m.nj,m.ge,m.ev,m.XQ,m.Gk,D],styles:[".content[_ngcontent-%COMP%]{margin:5rem auto;width:80%;max-width:600px;min-width:380px}.content[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]{margin:1rem 0}.content[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]     .mat-form-field{margin-right:1rem}.content[_ngcontent-%COMP%]   .warn[_ngcontent-%COMP%]{color:#f7910b}"]}),n})()}];let L=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[h.Bz.forChild(K),h.Bz]}),n})();var X=c(8066);let V=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[u.ez,r.u5,r.UX,L,X.q]}),n})()}}]);