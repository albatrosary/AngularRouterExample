/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from './a.module';
import * as import2 from '@angular/common/src/common_module';
import * as import3 from '@angular/core/src/application_module';
import * as import4 from '@angular/platform-browser/src/browser';
import * as import5 from '@angular/forms/src/directives';
import * as import6 from '@angular/forms/src/form_providers';
import * as import7 from '@angular/http/src/http_module';
import * as import8 from '@angular/router/src/router_module';
import * as import9 from '@angular/common/src/localization';
import * as import10 from '@angular/core/src/application_init';
import * as import11 from '@angular/core/src/testability/testability';
import * as import12 from '@angular/core/src/application_ref';
import * as import13 from '@angular/core/src/linker/compiler';
import * as import14 from '@angular/platform-browser/src/dom/events/hammer_gestures';
import * as import15 from '@angular/platform-browser/src/dom/events/event_manager';
import * as import16 from '@angular/platform-browser/src/dom/shared_styles_host';
import * as import17 from '@angular/platform-browser/src/dom/dom_renderer';
import * as import18 from '@angular/platform-browser/src/security/dom_sanitization_service';
import * as import19 from '@angular/core/src/linker/view_utils';
import * as import20 from '@angular/platform-browser/src/browser/title';
import * as import21 from '@angular/forms/src/directives/radio_control_value_accessor';
import * as import22 from '@angular/http/src/backends/browser_xhr';
import * as import23 from '@angular/http/src/base_response_options';
import * as import24 from '@angular/http/src/backends/xhr_backend';
import * as import25 from '@angular/http/src/base_request_options';
import * as import26 from '@angular/core/src/di/injector';
import * as import27 from './a.component.ngfactory';
import * as import28 from '@angular/core/src/application_tokens';
import * as import29 from '@angular/platform-browser/src/dom/events/dom_events';
import * as import30 from '@angular/platform-browser/src/dom/events/key_events';
import * as import31 from '@angular/core/src/zone/ng_zone';
import * as import32 from '@angular/platform-browser/src/dom/debug/ng_probe';
import * as import33 from './a.component';
import * as import34 from '@angular/core/src/console';
import * as import35 from '@angular/core/src/i18n/tokens';
import * as import36 from '@angular/core/src/error_handler';
import * as import37 from '@angular/platform-browser/src/dom/dom_tokens';
import * as import38 from '@angular/platform-browser/src/dom/animation_driver';
import * as import39 from '@angular/core/src/render/api';
import * as import40 from '@angular/core/src/security';
import * as import41 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import42 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import43 from '@angular/http/src/interfaces';
import * as import44 from '@angular/http/src/http';
import * as import45 from '@angular/router/src/router_config_loader';
import * as import46 from '@angular/core/src/i18n/tokens';
class AModuleInjector extends import0.NgModuleInjector<import1.AModule> {
  _CommonModule_0:import2.CommonModule;
  _ApplicationModule_1:import3.ApplicationModule;
  _BrowserModule_2:import4.BrowserModule;
  _InternalFormsSharedModule_3:import5.InternalFormsSharedModule;
  _FormsModule_4:import6.FormsModule;
  _HttpModule_5:import7.HttpModule;
  _RouterModule_6:import8.RouterModule;
  _AModule_7:import1.AModule;
  __LOCALE_ID_8:any;
  __NgLocalization_9:import9.NgLocaleLocalization;
  _ErrorHandler_10:any;
  _ApplicationInitStatus_11:import10.ApplicationInitStatus;
  _Testability_12:import11.Testability;
  _ApplicationRef__13:import12.ApplicationRef_;
  __ApplicationRef_14:any;
  __Compiler_15:import13.Compiler;
  __APP_ID_16:any;
  __DOCUMENT_17:any;
  __HAMMER_GESTURE_CONFIG_18:import14.HammerGestureConfig;
  __EVENT_MANAGER_PLUGINS_19:any[];
  __EventManager_20:import15.EventManager;
  __DomSharedStylesHost_21:import16.DomSharedStylesHost;
  __AnimationDriver_22:any;
  __DomRootRenderer_23:import17.DomRootRenderer_;
  __RootRenderer_24:any;
  __DomSanitizer_25:import18.DomSanitizerImpl;
  __Sanitizer_26:any;
  __ViewUtils_27:import19.ViewUtils;
  __IterableDiffers_28:any;
  __KeyValueDiffers_29:any;
  __SharedStylesHost_30:any;
  __Title_31:import20.Title;
  __RadioControlRegistry_32:import21.RadioControlRegistry;
  __BrowserXhr_33:import22.BrowserXhr;
  __ResponseOptions_34:import23.BaseResponseOptions;
  __XSRFStrategy_35:any;
  __XHRBackend_36:import24.XHRBackend;
  __RequestOptions_37:import25.BaseRequestOptions;
  __Http_38:any;
  __ROUTES_39:any[];
  __TRANSLATIONS_FORMAT_40:any;
  constructor(parent:import26.Injector) {
    super(parent,[
      import27.AComponentNgFactory,
      import27.AaComponentNgFactory,
      import27.AbComponentNgFactory,
      import27.AcComponentNgFactory
    ]
    ,[]);
  }
  get _LOCALE_ID_8():any {
    if ((this.__LOCALE_ID_8 == (null as any))) { (this.__LOCALE_ID_8 = (null as any)); }
    return this.__LOCALE_ID_8;
  }
  get _NgLocalization_9():import9.NgLocaleLocalization {
    if ((this.__NgLocalization_9 == (null as any))) { (this.__NgLocalization_9 = new import9.NgLocaleLocalization(this._LOCALE_ID_8)); }
    return this.__NgLocalization_9;
  }
  get _ApplicationRef_14():any {
    if ((this.__ApplicationRef_14 == (null as any))) { (this.__ApplicationRef_14 = this._ApplicationRef__13); }
    return this.__ApplicationRef_14;
  }
  get _Compiler_15():import13.Compiler {
    if ((this.__Compiler_15 == (null as any))) { (this.__Compiler_15 = new import13.Compiler()); }
    return this.__Compiler_15;
  }
  get _APP_ID_16():any {
    if ((this.__APP_ID_16 == (null as any))) { (this.__APP_ID_16 = import28._appIdRandomProviderFactory()); }
    return this.__APP_ID_16;
  }
  get _DOCUMENT_17():any {
    if ((this.__DOCUMENT_17 == (null as any))) { (this.__DOCUMENT_17 = import4._document()); }
    return this.__DOCUMENT_17;
  }
  get _HAMMER_GESTURE_CONFIG_18():import14.HammerGestureConfig {
    if ((this.__HAMMER_GESTURE_CONFIG_18 == (null as any))) { (this.__HAMMER_GESTURE_CONFIG_18 = new import14.HammerGestureConfig()); }
    return this.__HAMMER_GESTURE_CONFIG_18;
  }
  get _EVENT_MANAGER_PLUGINS_19():any[] {
    if ((this.__EVENT_MANAGER_PLUGINS_19 == (null as any))) { (this.__EVENT_MANAGER_PLUGINS_19 = [
      new import29.DomEventsPlugin(),
      new import30.KeyEventsPlugin(),
      new import14.HammerGesturesPlugin(this._HAMMER_GESTURE_CONFIG_18)
    ]
    ); }
    return this.__EVENT_MANAGER_PLUGINS_19;
  }
  get _EventManager_20():import15.EventManager {
    if ((this.__EventManager_20 == (null as any))) { (this.__EventManager_20 = new import15.EventManager(this._EVENT_MANAGER_PLUGINS_19,this.parent.get(import31.NgZone))); }
    return this.__EventManager_20;
  }
  get _DomSharedStylesHost_21():import16.DomSharedStylesHost {
    if ((this.__DomSharedStylesHost_21 == (null as any))) { (this.__DomSharedStylesHost_21 = new import16.DomSharedStylesHost(this._DOCUMENT_17)); }
    return this.__DomSharedStylesHost_21;
  }
  get _AnimationDriver_22():any {
    if ((this.__AnimationDriver_22 == (null as any))) { (this.__AnimationDriver_22 = import4._resolveDefaultAnimationDriver()); }
    return this.__AnimationDriver_22;
  }
  get _DomRootRenderer_23():import17.DomRootRenderer_ {
    if ((this.__DomRootRenderer_23 == (null as any))) { (this.__DomRootRenderer_23 = new import17.DomRootRenderer_(this._DOCUMENT_17,this._EventManager_20,this._DomSharedStylesHost_21,this._AnimationDriver_22)); }
    return this.__DomRootRenderer_23;
  }
  get _RootRenderer_24():any {
    if ((this.__RootRenderer_24 == (null as any))) { (this.__RootRenderer_24 = import32._createConditionalRootRenderer(this._DomRootRenderer_23,this.parent.get(import32.NgProbeToken,(null as any)))); }
    return this.__RootRenderer_24;
  }
  get _DomSanitizer_25():import18.DomSanitizerImpl {
    if ((this.__DomSanitizer_25 == (null as any))) { (this.__DomSanitizer_25 = new import18.DomSanitizerImpl()); }
    return this.__DomSanitizer_25;
  }
  get _Sanitizer_26():any {
    if ((this.__Sanitizer_26 == (null as any))) { (this.__Sanitizer_26 = this._DomSanitizer_25); }
    return this.__Sanitizer_26;
  }
  get _ViewUtils_27():import19.ViewUtils {
    if ((this.__ViewUtils_27 == (null as any))) { (this.__ViewUtils_27 = new import19.ViewUtils(this._RootRenderer_24,this._APP_ID_16,this._Sanitizer_26)); }
    return this.__ViewUtils_27;
  }
  get _IterableDiffers_28():any {
    if ((this.__IterableDiffers_28 == (null as any))) { (this.__IterableDiffers_28 = import3._iterableDiffersFactory()); }
    return this.__IterableDiffers_28;
  }
  get _KeyValueDiffers_29():any {
    if ((this.__KeyValueDiffers_29 == (null as any))) { (this.__KeyValueDiffers_29 = import3._keyValueDiffersFactory()); }
    return this.__KeyValueDiffers_29;
  }
  get _SharedStylesHost_30():any {
    if ((this.__SharedStylesHost_30 == (null as any))) { (this.__SharedStylesHost_30 = this._DomSharedStylesHost_21); }
    return this.__SharedStylesHost_30;
  }
  get _Title_31():import20.Title {
    if ((this.__Title_31 == (null as any))) { (this.__Title_31 = new import20.Title()); }
    return this.__Title_31;
  }
  get _RadioControlRegistry_32():import21.RadioControlRegistry {
    if ((this.__RadioControlRegistry_32 == (null as any))) { (this.__RadioControlRegistry_32 = new import21.RadioControlRegistry()); }
    return this.__RadioControlRegistry_32;
  }
  get _BrowserXhr_33():import22.BrowserXhr {
    if ((this.__BrowserXhr_33 == (null as any))) { (this.__BrowserXhr_33 = new import22.BrowserXhr()); }
    return this.__BrowserXhr_33;
  }
  get _ResponseOptions_34():import23.BaseResponseOptions {
    if ((this.__ResponseOptions_34 == (null as any))) { (this.__ResponseOptions_34 = new import23.BaseResponseOptions()); }
    return this.__ResponseOptions_34;
  }
  get _XSRFStrategy_35():any {
    if ((this.__XSRFStrategy_35 == (null as any))) { (this.__XSRFStrategy_35 = import7._createDefaultCookieXSRFStrategy()); }
    return this.__XSRFStrategy_35;
  }
  get _XHRBackend_36():import24.XHRBackend {
    if ((this.__XHRBackend_36 == (null as any))) { (this.__XHRBackend_36 = new import24.XHRBackend(this._BrowserXhr_33,this._ResponseOptions_34,this._XSRFStrategy_35)); }
    return this.__XHRBackend_36;
  }
  get _RequestOptions_37():import25.BaseRequestOptions {
    if ((this.__RequestOptions_37 == (null as any))) { (this.__RequestOptions_37 = new import25.BaseRequestOptions()); }
    return this.__RequestOptions_37;
  }
  get _Http_38():any {
    if ((this.__Http_38 == (null as any))) { (this.__Http_38 = import7.httpFactory(this._XHRBackend_36,this._RequestOptions_37)); }
    return this.__Http_38;
  }
  get _ROUTES_39():any[] {
        if ((this.__ROUTES_39 == (null as any))) { (this.__ROUTES_39 = [[{
          path: 'a',
          component: import33.AComponent,
          children: [
            {
              path: 'a',
              component: import33.AaComponent
            }
            ,
            {
              path: 'b',
              component: import33.AbComponent
            }
            ,
            {
              path: 'c',
              component: import33.AcComponent
            }

          ]

        }
    ]]); }
    return this.__ROUTES_39;
  }
  get _TRANSLATIONS_FORMAT_40():any {
    if ((this.__TRANSLATIONS_FORMAT_40 == (null as any))) { (this.__TRANSLATIONS_FORMAT_40 = (null as any)); }
    return this.__TRANSLATIONS_FORMAT_40;
  }
  createInternal():import1.AModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._ApplicationModule_1 = new import3.ApplicationModule();
    this._BrowserModule_2 = new import4.BrowserModule(this.parent.get(import4.BrowserModule,(null as any)));
    this._InternalFormsSharedModule_3 = new import5.InternalFormsSharedModule();
    this._FormsModule_4 = new import6.FormsModule();
    this._HttpModule_5 = new import7.HttpModule();
    this._RouterModule_6 = new import8.RouterModule(this.parent.get(import8.ROUTER_FORROOT_GUARD,(null as any)));
    this._AModule_7 = new import1.AModule();
    this._ErrorHandler_10 = import4.errorHandler();
    this._ApplicationInitStatus_11 = new import10.ApplicationInitStatus(this.parent.get(import10.APP_INITIALIZER,(null as any)));
    this._Testability_12 = new import11.Testability(this.parent.get(import31.NgZone));
    this._ApplicationRef__13 = new import12.ApplicationRef_(this.parent.get(import31.NgZone),this.parent.get(import34.Console),this,this._ErrorHandler_10,this,this._ApplicationInitStatus_11,this.parent.get(import11.TestabilityRegistry,(null as any)),this._Testability_12);
    return this._AModule_7;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import3.ApplicationModule)) { return this._ApplicationModule_1; }
    if ((token === import4.BrowserModule)) { return this._BrowserModule_2; }
    if ((token === import5.InternalFormsSharedModule)) { return this._InternalFormsSharedModule_3; }
    if ((token === import6.FormsModule)) { return this._FormsModule_4; }
    if ((token === import7.HttpModule)) { return this._HttpModule_5; }
    if ((token === import8.RouterModule)) { return this._RouterModule_6; }
    if ((token === import1.AModule)) { return this._AModule_7; }
    if ((token === import35.LOCALE_ID)) { return this._LOCALE_ID_8; }
    if ((token === import9.NgLocalization)) { return this._NgLocalization_9; }
    if ((token === import36.ErrorHandler)) { return this._ErrorHandler_10; }
    if ((token === import10.ApplicationInitStatus)) { return this._ApplicationInitStatus_11; }
    if ((token === import11.Testability)) { return this._Testability_12; }
    if ((token === import12.ApplicationRef_)) { return this._ApplicationRef__13; }
    if ((token === import12.ApplicationRef)) { return this._ApplicationRef_14; }
    if ((token === import13.Compiler)) { return this._Compiler_15; }
    if ((token === import28.APP_ID)) { return this._APP_ID_16; }
    if ((token === import37.DOCUMENT)) { return this._DOCUMENT_17; }
    if ((token === import14.HAMMER_GESTURE_CONFIG)) { return this._HAMMER_GESTURE_CONFIG_18; }
    if ((token === import15.EVENT_MANAGER_PLUGINS)) { return this._EVENT_MANAGER_PLUGINS_19; }
    if ((token === import15.EventManager)) { return this._EventManager_20; }
    if ((token === import16.DomSharedStylesHost)) { return this._DomSharedStylesHost_21; }
    if ((token === import38.AnimationDriver)) { return this._AnimationDriver_22; }
    if ((token === import17.DomRootRenderer)) { return this._DomRootRenderer_23; }
    if ((token === import39.RootRenderer)) { return this._RootRenderer_24; }
    if ((token === import18.DomSanitizer)) { return this._DomSanitizer_25; }
    if ((token === import40.Sanitizer)) { return this._Sanitizer_26; }
    if ((token === import19.ViewUtils)) { return this._ViewUtils_27; }
    if ((token === import41.IterableDiffers)) { return this._IterableDiffers_28; }
    if ((token === import42.KeyValueDiffers)) { return this._KeyValueDiffers_29; }
    if ((token === import16.SharedStylesHost)) { return this._SharedStylesHost_30; }
    if ((token === import20.Title)) { return this._Title_31; }
    if ((token === import21.RadioControlRegistry)) { return this._RadioControlRegistry_32; }
    if ((token === import22.BrowserXhr)) { return this._BrowserXhr_33; }
    if ((token === import23.ResponseOptions)) { return this._ResponseOptions_34; }
    if ((token === import43.XSRFStrategy)) { return this._XSRFStrategy_35; }
    if ((token === import24.XHRBackend)) { return this._XHRBackend_36; }
    if ((token === import25.RequestOptions)) { return this._RequestOptions_37; }
    if ((token === import44.Http)) { return this._Http_38; }
    if ((token === import45.ROUTES)) { return this._ROUTES_39; }
    if ((token === import46.TRANSLATIONS_FORMAT)) { return this._TRANSLATIONS_FORMAT_40; }
    return notFoundResult;
  }
  destroyInternal():void {
    this._ApplicationRef__13.ngOnDestroy();
  }
}
export const AModuleNgFactory:import0.NgModuleFactory<import1.AModule> = new import0.NgModuleFactory(AModuleInjector,import1.AModule);