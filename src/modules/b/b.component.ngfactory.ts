/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/debug_context';
import * as import1 from './b.component';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/view';
import * as import4 from '@angular/core/src/linker/element';
import * as import5 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/di/injector';
import * as import7 from '@angular/core/src/linker/view_type';
import * as import8 from '@angular/core/src/change_detection/change_detection';
import * as import9 from '@angular/core/src/metadata/view';
import * as import10 from '@angular/core/src/linker/component_factory';
import * as import11 from '@angular/router/src/directives/router_link';
import * as import12 from '@angular/router/src/directives/router_link_active';
import * as import13 from '@angular/router/src/directives/router_outlet';
import * as import14 from '@angular/core/src/linker/query_list';
import * as import15 from '@angular/router/src/router';
import * as import16 from '@angular/router/src/router_state';
import * as import17 from '@angular/common/src/location/location_strategy';
import * as import18 from '@angular/core/src/linker/element_ref';
import * as import19 from '@angular/router/src/router_outlet_map';
import * as import20 from '@angular/core/src/linker/component_factory_resolver';
import * as import21 from '@angular/core/src/security';
const nodeDebugInfos_BComponent_Host0:import0.StaticNodeDebugInfo[] = [new import0.StaticNodeDebugInfo([import1.BComponent],import1.BComponent,{})];
var renderType_BComponent_Host:import2.RenderComponentType = (null as any);
class _View_BComponent_Host0 extends import3.DebugAppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import4.AppElement;
  _BComponent_0_4:import1.BComponent;
  constructor(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement) {
    super(_View_BComponent_Host0,renderType_BComponent_Host,import7.ViewType.HOST,viewUtils,parentInjector,declarationEl,import8.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_BComponent_Host0);
  }
  createInternal(rootSelector:string):import4.AppElement {
    this._el_0 = this.selectOrCreateHostElement('my-b',rootSelector,this.debug(0,0,0));
    this._appEl_0 = new import4.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_BComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._BComponent_0_4 = new import1.BComponent();
    this._appEl_0.initComponent(this._BComponent_0_4,[],compView_0);
    compView_0.create(this._BComponent_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import1.BComponent) && (0 === requestNodeIndex))) { return this._BComponent_0_4; }
    return notFoundResult;
  }
}
function viewFactory_BComponent_Host0(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement):import3.AppView<any> {
  if ((renderType_BComponent_Host === (null as any))) { (renderType_BComponent_Host = viewUtils.createRenderComponentType('',0,import9.ViewEncapsulation.None,[],{})); }
  return new _View_BComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const BComponentNgFactory:import10.ComponentFactory<import1.BComponent> = new import10.ComponentFactory<import1.BComponent>('my-b',viewFactory_BComponent_Host0,import1.BComponent);
const styles_BComponent:any[] = [];
const nodeDebugInfos_BComponent0:import0.StaticNodeDebugInfo[] = [
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([
    import11.RouterLinkWithHref,
    import12.RouterLinkActive
  ]
  ,(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([
    import11.RouterLinkWithHref,
    import12.RouterLinkActive
  ]
  ,(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([
    import11.RouterLinkWithHref,
    import12.RouterLinkActive
  ]
  ,(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([import13.RouterOutlet],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{})
]
;
var renderType_BComponent:import2.RenderComponentType = (null as any);
class _View_BComponent0 extends import3.DebugAppView<import1.BComponent> {
  _text_0:any;
  _el_1:any;
  _text_2:any;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _el_6:any;
  _el_7:any;
  _RouterLinkWithHref_7_3:import11.RouterLinkWithHref;
  _RouterLinkActive_7_4:import12.RouterLinkActive;
  _query_RouterLink_7_0:import14.QueryList<any>;
  _query_RouterLinkWithHref_7_1:import14.QueryList<any>;
  _text_8:any;
  _text_9:any;
  _el_10:any;
  _el_11:any;
  _RouterLinkWithHref_11_3:import11.RouterLinkWithHref;
  _RouterLinkActive_11_4:import12.RouterLinkActive;
  _query_RouterLink_11_0:import14.QueryList<any>;
  _query_RouterLinkWithHref_11_1:import14.QueryList<any>;
  _text_12:any;
  _text_13:any;
  _el_14:any;
  _el_15:any;
  _RouterLinkWithHref_15_3:import11.RouterLinkWithHref;
  _RouterLinkActive_15_4:import12.RouterLinkActive;
  _query_RouterLink_15_0:import14.QueryList<any>;
  _query_RouterLinkWithHref_15_1:import14.QueryList<any>;
  _text_16:any;
  _text_17:any;
  _text_18:any;
  _el_19:any;
  /*private*/ _appEl_19:import4.AppElement;
  _RouterOutlet_19_5:import13.RouterOutlet;
  _text_20:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  /*private*/ _expr_7:any;
  /*private*/ _expr_9:any;
  /*private*/ _expr_10:any;
  /*private*/ _expr_11:any;
  constructor(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement) {
    super(_View_BComponent0,renderType_BComponent,import7.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import8.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_BComponent0);
  }
  createInternal(rootSelector:string):import4.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n    ',this.debug(0,0,0));
    this._el_1 = this.renderer.createElement(parentRenderNode,'h1',this.debug(1,1,4));
    this._text_2 = this.renderer.createText(this._el_1,'My B',this.debug(2,1,8));
    this._text_3 = this.renderer.createText(parentRenderNode,'\n    ',this.debug(3,1,17));
    this._el_4 = this.renderer.createElement(parentRenderNode,'ul',this.debug(4,2,4));
    this._text_5 = this.renderer.createText(this._el_4,'\n      ',this.debug(5,2,8));
    this._el_6 = this.renderer.createElement(this._el_4,'li',this.debug(6,3,6));
    this._el_7 = this.renderer.createElement(this._el_6,'a',this.debug(7,3,10));
    this.renderer.setElementAttribute(this._el_7,'routerLink','a');
    this.renderer.setElementAttribute(this._el_7,'routerLinkActive','active');
    this._RouterLinkWithHref_7_3 = new import11.RouterLinkWithHref(this.parentInjector.get(import15.Router),this.parentInjector.get(import16.ActivatedRoute),this.parentInjector.get(import17.LocationStrategy));
    this._RouterLinkActive_7_4 = new import12.RouterLinkActive(this.parentInjector.get(import15.Router),new import18.ElementRef(this._el_7),this.renderer);
    this._query_RouterLink_7_0 = new import14.QueryList<any>();
    this._query_RouterLinkWithHref_7_1 = new import14.QueryList<any>();
    this._text_8 = this.renderer.createText(this._el_7,'Ba Component',this.debug(8,3,54));
    this._text_9 = this.renderer.createText(this._el_4,'\n      ',this.debug(9,3,75));
    this._el_10 = this.renderer.createElement(this._el_4,'li',this.debug(10,4,6));
    this._el_11 = this.renderer.createElement(this._el_10,'a',this.debug(11,4,10));
    this.renderer.setElementAttribute(this._el_11,'routerLink','b');
    this.renderer.setElementAttribute(this._el_11,'routerLinkActive','active');
    this._RouterLinkWithHref_11_3 = new import11.RouterLinkWithHref(this.parentInjector.get(import15.Router),this.parentInjector.get(import16.ActivatedRoute),this.parentInjector.get(import17.LocationStrategy));
    this._RouterLinkActive_11_4 = new import12.RouterLinkActive(this.parentInjector.get(import15.Router),new import18.ElementRef(this._el_11),this.renderer);
    this._query_RouterLink_11_0 = new import14.QueryList<any>();
    this._query_RouterLinkWithHref_11_1 = new import14.QueryList<any>();
    this._text_12 = this.renderer.createText(this._el_11,'Bb Component',this.debug(12,4,54));
    this._text_13 = this.renderer.createText(this._el_4,'\n      ',this.debug(13,4,75));
    this._el_14 = this.renderer.createElement(this._el_4,'li',this.debug(14,5,6));
    this._el_15 = this.renderer.createElement(this._el_14,'a',this.debug(15,5,10));
    this.renderer.setElementAttribute(this._el_15,'routerLink','c');
    this.renderer.setElementAttribute(this._el_15,'routerLinkActive','active');
    this._RouterLinkWithHref_15_3 = new import11.RouterLinkWithHref(this.parentInjector.get(import15.Router),this.parentInjector.get(import16.ActivatedRoute),this.parentInjector.get(import17.LocationStrategy));
    this._RouterLinkActive_15_4 = new import12.RouterLinkActive(this.parentInjector.get(import15.Router),new import18.ElementRef(this._el_15),this.renderer);
    this._query_RouterLink_15_0 = new import14.QueryList<any>();
    this._query_RouterLinkWithHref_15_1 = new import14.QueryList<any>();
    this._text_16 = this.renderer.createText(this._el_15,'Bc Component',this.debug(16,5,54));
    this._text_17 = this.renderer.createText(this._el_4,'\n    ',this.debug(17,5,75));
    this._text_18 = this.renderer.createText(parentRenderNode,'\n    ',this.debug(18,6,9));
    this._el_19 = this.renderer.createElement(parentRenderNode,'router-outlet',this.debug(19,7,4));
    this._appEl_19 = new import4.AppElement(19,(null as any),this,this._el_19);
    this._RouterOutlet_19_5 = new import13.RouterOutlet(this.parentInjector.get(import19.RouterOutletMap),this._appEl_19.vcRef,this.parentInjector.get(import20.ComponentFactoryResolver),(null as any));
    this._text_20 = this.renderer.createText(parentRenderNode,'\n    ',this.debug(20,7,35));
    var disposable_0:Function = this.renderer.listen(this._el_7,'click',this.eventHandler(this._handle_click_7_0.bind(this)));
    this._expr_1 = import8.UNINITIALIZED;
    this._expr_2 = import8.UNINITIALIZED;
    this._expr_3 = import8.UNINITIALIZED;
    var disposable_1:Function = this.renderer.listen(this._el_11,'click',this.eventHandler(this._handle_click_11_0.bind(this)));
    this._expr_5 = import8.UNINITIALIZED;
    this._expr_6 = import8.UNINITIALIZED;
    this._expr_7 = import8.UNINITIALIZED;
    var disposable_2:Function = this.renderer.listen(this._el_15,'click',this.eventHandler(this._handle_click_15_0.bind(this)));
    this._expr_9 = import8.UNINITIALIZED;
    this._expr_10 = import8.UNINITIALIZED;
    this._expr_11 = import8.UNINITIALIZED;
    this.init([],[
      this._text_0,
      this._el_1,
      this._text_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._el_6,
      this._el_7,
      this._text_8,
      this._text_9,
      this._el_10,
      this._el_11,
      this._text_12,
      this._text_13,
      this._el_14,
      this._el_15,
      this._text_16,
      this._text_17,
      this._text_18,
      this._el_19,
      this._text_20
    ]
    ,[
      disposable_0,
      disposable_1,
      disposable_2
    ]
    ,[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import11.RouterLinkWithHref) && ((7 <= requestNodeIndex) && (requestNodeIndex <= 8)))) { return this._RouterLinkWithHref_7_3; }
    if (((token === import12.RouterLinkActive) && ((7 <= requestNodeIndex) && (requestNodeIndex <= 8)))) { return this._RouterLinkActive_7_4; }
    if (((token === import11.RouterLinkWithHref) && ((11 <= requestNodeIndex) && (requestNodeIndex <= 12)))) { return this._RouterLinkWithHref_11_3; }
    if (((token === import12.RouterLinkActive) && ((11 <= requestNodeIndex) && (requestNodeIndex <= 12)))) { return this._RouterLinkActive_11_4; }
    if (((token === import11.RouterLinkWithHref) && ((15 <= requestNodeIndex) && (requestNodeIndex <= 16)))) { return this._RouterLinkWithHref_15_3; }
    if (((token === import12.RouterLinkActive) && ((15 <= requestNodeIndex) && (requestNodeIndex <= 16)))) { return this._RouterLinkActive_15_4; }
    if (((token === import13.RouterOutlet) && (19 === requestNodeIndex))) { return this._RouterOutlet_19_5; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changes:{[key: string]:import8.SimpleChange} = (null as any);
    this.debug(7,3,10);
    changes = (null as any);
    this.debug(7,3,13);
    const currVal_1:any = 'a';
    if (import5.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this._RouterLinkWithHref_7_3.routerLink = currVal_1;
      if ((changes === (null as any))) { (changes = {}); }
      changes['routerLink'] = new import8.SimpleChange(this._expr_1,currVal_1);
      this._expr_1 = currVal_1;
    }
    if ((changes !== (null as any))) { this._RouterLinkWithHref_7_3.ngOnChanges(changes); }
    this.debug(7,3,10);
    changes = (null as any);
    this.debug(7,3,28);
    const currVal_3:any = 'active';
    if (import5.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this._RouterLinkActive_7_4.routerLinkActive = currVal_3;
      if ((changes === (null as any))) { (changes = {}); }
      changes['routerLinkActive'] = new import8.SimpleChange(this._expr_3,currVal_3);
      this._expr_3 = currVal_3;
    }
    if ((changes !== (null as any))) { this._RouterLinkActive_7_4.ngOnChanges(changes); }
    this.debug(11,4,10);
    changes = (null as any);
    this.debug(11,4,13);
    const currVal_5:any = 'b';
    if (import5.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this._RouterLinkWithHref_11_3.routerLink = currVal_5;
      if ((changes === (null as any))) { (changes = {}); }
      changes['routerLink'] = new import8.SimpleChange(this._expr_5,currVal_5);
      this._expr_5 = currVal_5;
    }
    if ((changes !== (null as any))) { this._RouterLinkWithHref_11_3.ngOnChanges(changes); }
    this.debug(11,4,10);
    changes = (null as any);
    this.debug(11,4,28);
    const currVal_7:any = 'active';
    if (import5.checkBinding(throwOnChange,this._expr_7,currVal_7)) {
      this._RouterLinkActive_11_4.routerLinkActive = currVal_7;
      if ((changes === (null as any))) { (changes = {}); }
      changes['routerLinkActive'] = new import8.SimpleChange(this._expr_7,currVal_7);
      this._expr_7 = currVal_7;
    }
    if ((changes !== (null as any))) { this._RouterLinkActive_11_4.ngOnChanges(changes); }
    this.debug(15,5,10);
    changes = (null as any);
    this.debug(15,5,13);
    const currVal_9:any = 'c';
    if (import5.checkBinding(throwOnChange,this._expr_9,currVal_9)) {
      this._RouterLinkWithHref_15_3.routerLink = currVal_9;
      if ((changes === (null as any))) { (changes = {}); }
      changes['routerLink'] = new import8.SimpleChange(this._expr_9,currVal_9);
      this._expr_9 = currVal_9;
    }
    if ((changes !== (null as any))) { this._RouterLinkWithHref_15_3.ngOnChanges(changes); }
    this.debug(15,5,10);
    changes = (null as any);
    this.debug(15,5,28);
    const currVal_11:any = 'active';
    if (import5.checkBinding(throwOnChange,this._expr_11,currVal_11)) {
      this._RouterLinkActive_15_4.routerLinkActive = currVal_11;
      if ((changes === (null as any))) { (changes = {}); }
      changes['routerLinkActive'] = new import8.SimpleChange(this._expr_11,currVal_11);
      this._expr_11 = currVal_11;
    }
    if ((changes !== (null as any))) { this._RouterLinkActive_15_4.ngOnChanges(changes); }
    this.detectContentChildrenChanges(throwOnChange);
    if (!throwOnChange) {
      if (this._query_RouterLink_7_0.dirty) {
        this._query_RouterLink_7_0.reset([]);
        this._RouterLinkActive_7_4.links = this._query_RouterLink_7_0;
        this._query_RouterLink_7_0.notifyOnChanges();
      }
      if (this._query_RouterLinkWithHref_7_1.dirty) {
        this._query_RouterLinkWithHref_7_1.reset([this._RouterLinkWithHref_7_3]);
        this._RouterLinkActive_7_4.linksWithHrefs = this._query_RouterLinkWithHref_7_1;
        this._query_RouterLinkWithHref_7_1.notifyOnChanges();
      }
      if (this._query_RouterLink_11_0.dirty) {
        this._query_RouterLink_11_0.reset([]);
        this._RouterLinkActive_11_4.links = this._query_RouterLink_11_0;
        this._query_RouterLink_11_0.notifyOnChanges();
      }
      if (this._query_RouterLinkWithHref_11_1.dirty) {
        this._query_RouterLinkWithHref_11_1.reset([this._RouterLinkWithHref_11_3]);
        this._RouterLinkActive_11_4.linksWithHrefs = this._query_RouterLinkWithHref_11_1;
        this._query_RouterLinkWithHref_11_1.notifyOnChanges();
      }
      if (this._query_RouterLink_15_0.dirty) {
        this._query_RouterLink_15_0.reset([]);
        this._RouterLinkActive_15_4.links = this._query_RouterLink_15_0;
        this._query_RouterLink_15_0.notifyOnChanges();
      }
      if (this._query_RouterLinkWithHref_15_1.dirty) {
        this._query_RouterLinkWithHref_15_1.reset([this._RouterLinkWithHref_15_3]);
        this._RouterLinkActive_15_4.linksWithHrefs = this._query_RouterLinkWithHref_15_1;
        this._query_RouterLinkWithHref_15_1.notifyOnChanges();
      }
      this.debug(7,3,10);
      if ((this.numberOfChecks === 0)) { this._RouterLinkActive_7_4.ngAfterContentInit(); }
      this.debug(11,4,10);
      if ((this.numberOfChecks === 0)) { this._RouterLinkActive_11_4.ngAfterContentInit(); }
      this.debug(15,5,10);
      if ((this.numberOfChecks === 0)) { this._RouterLinkActive_15_4.ngAfterContentInit(); }
    }
    this.debug(7,3,10);
    const currVal_2:any = this._RouterLinkWithHref_7_3.href;
    if (import5.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setElementProperty(this._el_7,'href',this.viewUtils.sanitizer.sanitize(import21.SecurityContext.URL,currVal_2));
      this._expr_2 = currVal_2;
    }
    this.debug(11,4,10);
    const currVal_6:any = this._RouterLinkWithHref_11_3.href;
    if (import5.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      this.renderer.setElementProperty(this._el_11,'href',this.viewUtils.sanitizer.sanitize(import21.SecurityContext.URL,currVal_6));
      this._expr_6 = currVal_6;
    }
    this.debug(15,5,10);
    const currVal_10:any = this._RouterLinkWithHref_15_3.href;
    if (import5.checkBinding(throwOnChange,this._expr_10,currVal_10)) {
      this.renderer.setElementProperty(this._el_15,'href',this.viewUtils.sanitizer.sanitize(import21.SecurityContext.URL,currVal_10));
      this._expr_10 = currVal_10;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this.debug(7,3,10);
    this._RouterLinkWithHref_7_3.ngOnDestroy();
    this._RouterLinkActive_7_4.ngOnDestroy();
    this.debug(11,4,10);
    this._RouterLinkWithHref_11_3.ngOnDestroy();
    this._RouterLinkActive_11_4.ngOnDestroy();
    this.debug(15,5,10);
    this._RouterLinkWithHref_15_3.ngOnDestroy();
    this._RouterLinkActive_15_4.ngOnDestroy();
    this.debug(19,7,4);
    this._RouterOutlet_19_5.ngOnDestroy();
  }
  private _handle_click_7_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    this.debug(7,3,10);
    const pd_0:any = ((<any>this._RouterLinkWithHref_7_3.onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
    return (true && pd_0);
  }
  private _handle_click_11_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    this.debug(11,4,10);
    const pd_0:any = ((<any>this._RouterLinkWithHref_11_3.onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
    return (true && pd_0);
  }
  private _handle_click_15_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    this.debug(15,5,10);
    const pd_0:any = ((<any>this._RouterLinkWithHref_15_3.onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
    return (true && pd_0);
  }
}
export function viewFactory_BComponent0(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement):import3.AppView<import1.BComponent> {
  if ((renderType_BComponent === (null as any))) { (renderType_BComponent = viewUtils.createRenderComponentType('/Users/albatrosary/Sandbox/angular2-lite-start/src/modules/b/b.component.ts class BComponent - inline template',0,import9.ViewEncapsulation.None,styles_BComponent,{})); }
  return new _View_BComponent0(viewUtils,parentInjector,declarationEl);
}
const nodeDebugInfos_BaComponent_Host0:import0.StaticNodeDebugInfo[] = [new import0.StaticNodeDebugInfo([import1.BaComponent],import1.BaComponent,{})];
var renderType_BaComponent_Host:import2.RenderComponentType = (null as any);
class _View_BaComponent_Host0 extends import3.DebugAppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import4.AppElement;
  _BaComponent_0_4:import1.BaComponent;
  constructor(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement) {
    super(_View_BaComponent_Host0,renderType_BaComponent_Host,import7.ViewType.HOST,viewUtils,parentInjector,declarationEl,import8.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_BaComponent_Host0);
  }
  createInternal(rootSelector:string):import4.AppElement {
    this._el_0 = this.selectOrCreateHostElement('my-ba',rootSelector,this.debug(0,0,0));
    this._appEl_0 = new import4.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_BaComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._BaComponent_0_4 = new import1.BaComponent();
    this._appEl_0.initComponent(this._BaComponent_0_4,[],compView_0);
    compView_0.create(this._BaComponent_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import1.BaComponent) && (0 === requestNodeIndex))) { return this._BaComponent_0_4; }
    return notFoundResult;
  }
}
function viewFactory_BaComponent_Host0(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement):import3.AppView<any> {
  if ((renderType_BaComponent_Host === (null as any))) { (renderType_BaComponent_Host = viewUtils.createRenderComponentType('',0,import9.ViewEncapsulation.None,[],{})); }
  return new _View_BaComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const BaComponentNgFactory:import10.ComponentFactory<import1.BaComponent> = new import10.ComponentFactory<import1.BaComponent>('my-ba',viewFactory_BaComponent_Host0,import1.BaComponent);
const styles_BaComponent:any[] = [];
const nodeDebugInfos_BaComponent0:import0.StaticNodeDebugInfo[] = [
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{})
]
;
var renderType_BaComponent:import2.RenderComponentType = (null as any);
class _View_BaComponent0 extends import3.DebugAppView<import1.BaComponent> {
  _text_0:any;
  _el_1:any;
  _text_2:any;
  _text_3:any;
  constructor(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement) {
    super(_View_BaComponent0,renderType_BaComponent,import7.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import8.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_BaComponent0);
  }
  createInternal(rootSelector:string):import4.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n    ',this.debug(0,0,0));
    this._el_1 = this.renderer.createElement(parentRenderNode,'h1',this.debug(1,1,4));
    this._text_2 = this.renderer.createText(this._el_1,'Ba Component',this.debug(2,1,8));
    this._text_3 = this.renderer.createText(parentRenderNode,'\n    ',this.debug(3,1,25));
    this.init([],[
      this._text_0,
      this._el_1,
      this._text_2,
      this._text_3
    ]
    ,[],[]);
    return (null as any);
  }
}
export function viewFactory_BaComponent0(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement):import3.AppView<import1.BaComponent> {
  if ((renderType_BaComponent === (null as any))) { (renderType_BaComponent = viewUtils.createRenderComponentType('/Users/albatrosary/Sandbox/angular2-lite-start/src/modules/b/b.component.ts class BaComponent - inline template',0,import9.ViewEncapsulation.None,styles_BaComponent,{})); }
  return new _View_BaComponent0(viewUtils,parentInjector,declarationEl);
}
const nodeDebugInfos_BbComponent_Host0:import0.StaticNodeDebugInfo[] = [new import0.StaticNodeDebugInfo([import1.BbComponent],import1.BbComponent,{})];
var renderType_BbComponent_Host:import2.RenderComponentType = (null as any);
class _View_BbComponent_Host0 extends import3.DebugAppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import4.AppElement;
  _BbComponent_0_4:import1.BbComponent;
  constructor(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement) {
    super(_View_BbComponent_Host0,renderType_BbComponent_Host,import7.ViewType.HOST,viewUtils,parentInjector,declarationEl,import8.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_BbComponent_Host0);
  }
  createInternal(rootSelector:string):import4.AppElement {
    this._el_0 = this.selectOrCreateHostElement('my-bb',rootSelector,this.debug(0,0,0));
    this._appEl_0 = new import4.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_BbComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._BbComponent_0_4 = new import1.BbComponent();
    this._appEl_0.initComponent(this._BbComponent_0_4,[],compView_0);
    compView_0.create(this._BbComponent_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import1.BbComponent) && (0 === requestNodeIndex))) { return this._BbComponent_0_4; }
    return notFoundResult;
  }
}
function viewFactory_BbComponent_Host0(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement):import3.AppView<any> {
  if ((renderType_BbComponent_Host === (null as any))) { (renderType_BbComponent_Host = viewUtils.createRenderComponentType('',0,import9.ViewEncapsulation.None,[],{})); }
  return new _View_BbComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const BbComponentNgFactory:import10.ComponentFactory<import1.BbComponent> = new import10.ComponentFactory<import1.BbComponent>('my-bb',viewFactory_BbComponent_Host0,import1.BbComponent);
const styles_BbComponent:any[] = [];
const nodeDebugInfos_BbComponent0:import0.StaticNodeDebugInfo[] = [
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{})
]
;
var renderType_BbComponent:import2.RenderComponentType = (null as any);
class _View_BbComponent0 extends import3.DebugAppView<import1.BbComponent> {
  _text_0:any;
  _el_1:any;
  _text_2:any;
  _text_3:any;
  constructor(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement) {
    super(_View_BbComponent0,renderType_BbComponent,import7.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import8.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_BbComponent0);
  }
  createInternal(rootSelector:string):import4.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n    ',this.debug(0,0,0));
    this._el_1 = this.renderer.createElement(parentRenderNode,'h1',this.debug(1,1,4));
    this._text_2 = this.renderer.createText(this._el_1,'Bb Component',this.debug(2,1,8));
    this._text_3 = this.renderer.createText(parentRenderNode,'\n    ',this.debug(3,1,25));
    this.init([],[
      this._text_0,
      this._el_1,
      this._text_2,
      this._text_3
    ]
    ,[],[]);
    return (null as any);
  }
}
export function viewFactory_BbComponent0(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement):import3.AppView<import1.BbComponent> {
  if ((renderType_BbComponent === (null as any))) { (renderType_BbComponent = viewUtils.createRenderComponentType('/Users/albatrosary/Sandbox/angular2-lite-start/src/modules/b/b.component.ts class BbComponent - inline template',0,import9.ViewEncapsulation.None,styles_BbComponent,{})); }
  return new _View_BbComponent0(viewUtils,parentInjector,declarationEl);
}
const nodeDebugInfos_BcComponent_Host0:import0.StaticNodeDebugInfo[] = [new import0.StaticNodeDebugInfo([import1.BcComponent],import1.BcComponent,{})];
var renderType_BcComponent_Host:import2.RenderComponentType = (null as any);
class _View_BcComponent_Host0 extends import3.DebugAppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import4.AppElement;
  _BcComponent_0_4:import1.BcComponent;
  constructor(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement) {
    super(_View_BcComponent_Host0,renderType_BcComponent_Host,import7.ViewType.HOST,viewUtils,parentInjector,declarationEl,import8.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_BcComponent_Host0);
  }
  createInternal(rootSelector:string):import4.AppElement {
    this._el_0 = this.selectOrCreateHostElement('my-bc',rootSelector,this.debug(0,0,0));
    this._appEl_0 = new import4.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_BcComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._BcComponent_0_4 = new import1.BcComponent();
    this._appEl_0.initComponent(this._BcComponent_0_4,[],compView_0);
    compView_0.create(this._BcComponent_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import1.BcComponent) && (0 === requestNodeIndex))) { return this._BcComponent_0_4; }
    return notFoundResult;
  }
}
function viewFactory_BcComponent_Host0(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement):import3.AppView<any> {
  if ((renderType_BcComponent_Host === (null as any))) { (renderType_BcComponent_Host = viewUtils.createRenderComponentType('',0,import9.ViewEncapsulation.None,[],{})); }
  return new _View_BcComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const BcComponentNgFactory:import10.ComponentFactory<import1.BcComponent> = new import10.ComponentFactory<import1.BcComponent>('my-bc',viewFactory_BcComponent_Host0,import1.BcComponent);
const styles_BcComponent:any[] = [];
const nodeDebugInfos_BcComponent0:import0.StaticNodeDebugInfo[] = [
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{})
]
;
var renderType_BcComponent:import2.RenderComponentType = (null as any);
class _View_BcComponent0 extends import3.DebugAppView<import1.BcComponent> {
  _text_0:any;
  _el_1:any;
  _text_2:any;
  _text_3:any;
  constructor(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement) {
    super(_View_BcComponent0,renderType_BcComponent,import7.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import8.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_BcComponent0);
  }
  createInternal(rootSelector:string):import4.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n    ',this.debug(0,0,0));
    this._el_1 = this.renderer.createElement(parentRenderNode,'h1',this.debug(1,1,4));
    this._text_2 = this.renderer.createText(this._el_1,'Bc Component',this.debug(2,1,8));
    this._text_3 = this.renderer.createText(parentRenderNode,'\n    ',this.debug(3,1,25));
    this.init([],[
      this._text_0,
      this._el_1,
      this._text_2,
      this._text_3
    ]
    ,[],[]);
    return (null as any);
  }
}
export function viewFactory_BcComponent0(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement):import3.AppView<import1.BcComponent> {
  if ((renderType_BcComponent === (null as any))) { (renderType_BcComponent = viewUtils.createRenderComponentType('/Users/albatrosary/Sandbox/angular2-lite-start/src/modules/b/b.component.ts class BcComponent - inline template',0,import9.ViewEncapsulation.None,styles_BcComponent,{})); }
  return new _View_BcComponent0(viewUtils,parentInjector,declarationEl);
}