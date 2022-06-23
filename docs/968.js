"use strict";(self.webpackChunkdynamicTable=self.webpackChunkdynamicTable||[]).push([[968],{8968:(E,d,r)=>{r.r(d),r.d(d,{TableModule:()=>B});var l=r(4006),f=r(5932),t=r(4650),b=r(5762),p=r(1086);let h=(()=>{class o extends b.ObservableStore{constructor(){super({trackStateHistory:!0}),this.setState({table:[]},"INIT_STATE")}get(){const{table:e}=this.getState();return(0,p.of)(e||null)}add(e){let a=this.getState().table,c=null;a.find((s,u)=>(c=u,s.id===e.id))?(console.log("existing"),a[c]={...e}):(console.log("new"),a=[...a,e],console.log(a)),this.setState({table:a},"ADD_ROW_TO_TABLE")}remove(){let e=this.getState();e.table.splice(e.table.length-1,1),this.setState({table:e.table},"REMOVE_ROW")}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var T=r(6895),_=r(4859),C=r(3336),w=r(9549),g=r(4144),i=r(671);let x=(()=>{class o{precise(e){return Math.round(parseFloat((e*Math.pow(10,5)).toFixed(5)))/Math.pow(10,5)}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})(),y=(()=>{class o{constructor(e,a){this.tableService=e,this.store=a,this.finalCalcul=0}ngOnInit(){console.log("v on init"),this.store.stateChanged.subscribe(e=>{if(console.log(e,"data"),e.table.length>0){this.accountArray=e.table.map(a=>a.account),this.finalCalcul=0;for(let a in this.accountArray)this.finalCalcul=this.tableService.precise(this.finalCalcul+this.accountArray[a])}})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(x),t.Y36(h))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-summary"]],decls:4,vars:1,template:function(e,a){1&e&&(t.TgZ(0,"p"),t._uU(1,"Together in all accounts: "),t.TgZ(2,"strong"),t._uU(3),t.qZA()()),2&e&&(t.xp6(3),t.Oqu(a.finalCalcul))}}),o})();function v(o,n){1&o&&(t.TgZ(0,"th",18),t._uU(1,"ID"),t.qZA())}function N(o,n){if(1&o&&(t.TgZ(0,"td",19),t._uU(1),t.qZA()),2&o){const e=n.$implicit;t.xp6(1),t.Oqu(e.id)}}function Z(o,n){1&o&&(t.TgZ(0,"th",18),t._uU(1,"First Name"),t.qZA())}function S(o,n){1&o&&(t.TgZ(0,"td",20)(1,"mat-form-field"),t._UZ(2,"input",21),t.qZA()()),2&o&&t.Q6J("formGroupName",n.index)}function A(o,n){1&o&&(t.TgZ(0,"th",18),t._uU(1,"Last Name"),t.qZA())}function R(o,n){1&o&&(t.TgZ(0,"td",20)(1,"mat-form-field"),t._UZ(2,"input",22),t.qZA()()),2&o&&t.Q6J("formGroupName",n.index)}function F(o,n){1&o&&(t.TgZ(0,"th",18),t._uU(1,"Account"),t.qZA())}function I(o,n){1&o&&(t.TgZ(0,"td",20)(1,"mat-form-field"),t._UZ(2,"input",23),t.qZA()()),2&o&&t.Q6J("formGroupName",n.index)}function U(o,n){1&o&&(t.TgZ(0,"th",18),t._uU(1,"actions"),t.qZA())}function J(o,n){if(1&o){const e=t.EpF();t.TgZ(0,"button",28),t.NdJ("click",function(){t.CHM(e);const c=t.oxw(),m=c.index,s=c.$implicit,u=t.oxw();return t.KtG(u.removeRow(m,s.id))}),t.TgZ(1,"mat-icon"),t._uU(2,"delete"),t.qZA()()}}function M(o,n){if(1&o){const e=t.EpF();t.TgZ(0,"button",29),t.NdJ("click",function(){t.CHM(e);const c=t.oxw().index,m=t.oxw();return t.KtG(m.undoDelete(c))}),t._uU(1," undo "),t.qZA()}}function Y(o,n){if(1&o){const e=t.EpF();t.TgZ(0,"td",24)(1,"button",25),t.NdJ("click",function(){const m=t.CHM(e).index,s=t.oxw();return t.KtG(s.saveRow(m))}),t.TgZ(2,"mat-icon"),t._uU(3,"done"),t.qZA()(),t.YNc(4,J,3,0,"button",26),t.YNc(5,M,2,0,"button",27),t.qZA()}if(2&o){const e=n.index,a=t.oxw();t.Q6J("formGroupName",e),t.xp6(1),t.Q6J("disabled",!a.myForm.valid),t.xp6(3),t.Q6J("ngIf",!a.undoRow[e].showUndo),t.xp6(1),t.Q6J("ngIf",a.undoRow[e].showUndo)}}function D(o,n){1&o&&t._UZ(0,"tr",30)}function O(o,n){1&o&&t._UZ(0,"tr",31)}function Q(o,n){1&o&&(t.TgZ(0,"p",32),t._uU(1," Form mast be valid and all fields filled "),t.qZA())}const k=[{path:"",component:(()=>{class o{constructor(e){this.store=e,this.displayedColumns=["id","firstName","lastName","account","actions"],this.undoRow=[{showUndo:!1,timer:0}],this.countId=0}ngOnInit(){this.myForm=new l.cw({testField:new l.NI("testValue"),rows:new l.Oe([this.initRows(0)])}),this.dataSource=this.myForm.controls.rows.value,this.myForm.valueChanges.subscribe(e=>console.log(e))}initRows(e){return new l.cw({firstName:new l.NI("test",l.kI.required),lastName:new l.NI("",l.kI.required),account:new l.NI(null,l.kI.required),id:new l.NI(e)})}saveRow(e){this.store.add(this.myForm.controls.rows.value[e])}removeRow(e,a){this.undoRow[e].showUndo=!0;const c=this.myForm.controls.rows;this.undoRow[e].timer=setTimeout(()=>{const m=c.value.map(s=>s.id).indexOf(a);c.removeAt(m),this.undoRow.splice(m,1),this.dataSource=this.myForm.controls.rows.value},3e3)}addRows(){this.countId++,this.myForm.controls.rows.push(this.initRows(this.countId)),this.dataSource=this.myForm.controls.rows.value,this.undoRow.push({showUndo:!1,timer:0})}undoDelete(e){this.undoRow[e].showUndo=!1,clearTimeout(this.undoRow[e].timer)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(h))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-table"]],decls:29,vars:6,consts:[[1,"content"],["novalidate","",3,"formGroup"],["matInput","","formControlName","testField",1,"form-control"],["formArrayName","rows"],["mat-table","",1,"table",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","firstName"],["mat-cell","",3,"formGroupName",4,"matCellDef"],["matColumnDef","lastName"],["matColumnDef","account"],["matColumnDef","actions"],["mat-cell","","class","specialcell",3,"formGroupName",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["class","warn",4,"ngIf"],["mat-button","","color","primary",3,"disabled","click"],["mat-header-cell",""],["mat-cell",""],["mat-cell","",3,"formGroupName"],["matInput","","formControlName","firstName",1,"form-control"],["matInput","","formControlName","lastName",1,"form-control"],["type","number","matInput","","formControlName","account",1,"form-control"],["mat-cell","",1,"specialcell",3,"formGroupName"],["mat-icon-button","","aria-label","Save","color","primary",3,"disabled","click"],["mat-icon-button","","color","warn",3,"click",4,"ngIf"],["mat-button","","color","warn",3,"click",4,"ngIf"],["mat-icon-button","","color","warn",3,"click"],["mat-button","","color","warn",3,"click"],["mat-header-row",""],["mat-row",""],[1,"warn"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0)(1,"h1"),t._uU(2,"Angular's dynamic table - Account Calculator"),t.qZA(),t.TgZ(3,"form",1)(4,"mat-form-field"),t._UZ(5,"input",2),t.qZA(),t.TgZ(6,"div",3)(7,"table",4),t.ynx(8,5),t.YNc(9,v,2,0,"th",6),t.YNc(10,N,2,1,"td",7),t.BQk(),t.ynx(11,8),t.YNc(12,Z,2,0,"th",6),t.YNc(13,S,3,1,"td",9),t.BQk(),t.ynx(14,10),t.YNc(15,A,2,0,"th",6),t.YNc(16,R,3,1,"td",9),t.BQk(),t.ynx(17,11),t.YNc(18,F,2,0,"th",6),t.YNc(19,I,3,1,"td",9),t.BQk(),t.ynx(20,12),t.YNc(21,U,2,0,"th",6),t.YNc(22,Y,6,4,"td",13),t.BQk(),t.YNc(23,D,1,0,"tr",14),t.YNc(24,O,1,0,"tr",15),t.qZA(),t.YNc(25,Q,2,0,"p",16),t.TgZ(26,"button",17),t.NdJ("click",function(){return a.addRows()}),t._uU(27," Add Row "),t.qZA()()(),t._UZ(28,"app-summary"),t.qZA()),2&e&&(t.xp6(3),t.Q6J("formGroup",a.myForm),t.xp6(4),t.Q6J("dataSource",a.dataSource),t.xp6(16),t.Q6J("matHeaderRowDef",a.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",a.displayedColumns),t.xp6(1),t.Q6J("ngIf",!a.myForm.valid),t.xp6(1),t.Q6J("disabled",!a.myForm.valid))},dependencies:[T.O5,l._Y,l.Fj,l.wV,l.JJ,l.JL,l.sg,l.u,l.x0,l.CE,_.lW,C.Hw,w.KE,g.Nt,i.BZ,i.fO,i.as,i.w1,i.Dz,i.nj,i.ge,i.ev,i.XQ,i.Gk,y],styles:[".content[_ngcontent-%COMP%]{margin:5rem auto;width:80%;max-width:600px;min-width:380px}.content[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]{margin:1rem 0}.content[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]     .mat-form-field{margin-right:1rem}.content[_ngcontent-%COMP%]   .warn[_ngcontent-%COMP%]{color:#f7910b}"]}),o})()}];let G=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[f.Bz.forChild(k),f.Bz]}),o})();var q=r(1580);let B=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[T.ez,l.u5,l.UX,G,q.q]}),o})()}}]);