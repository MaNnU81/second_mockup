import {
  AnimationBuilder,
  ButtonComponent,
  chevronLeftIcon,
  chevronRightIcon
} from "./chunk-4R5TBV3W.js";
import {
  L10N_PREFIX,
  LocalizationService
} from "./chunk-VLAR566J.js";
import {
  IconWrapperComponent,
  IconsService
} from "./chunk-FFN2C4NF.js";
import {
  Keys,
  PreventableEvent,
  ResizeBatchService,
  ResizeSensorComponent,
  areObjectsEqual,
  closestInScope,
  contains,
  focusableSelector,
  isDocumentAvailable,
  isPresent,
  parseCSSClassNames
} from "./chunk-SU3MIXZA.js";
import {
  validatePackage
} from "./chunk-K7WV2CIM.js";
import {
  animate,
  style
} from "./chunk-CPZHUBVM.js";
import {
  AsyncPipe,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  NgTemplateOutlet
} from "./chunk-KWOVU4BG.js";
import {
  BehaviorSubject,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  Directive,
  ElementRef,
  EventEmitter,
  Host,
  HostBinding,
  Inject,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  NgZone,
  Optional,
  Output,
  Renderer2,
  ReplaySubject,
  Subject,
  Subscription,
  TemplateRef,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
  filter,
  forwardRef,
  fromEvent,
  isDevMode,
  map,
  merge,
  setClassMetadata,
  share,
  startWith,
  take,
  tap,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵpureFunction5,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-UQXS7UWY.js";
import {
  __spreadValues
} from "./chunk-XWLXMCJQ.js";

// node_modules/@progress/kendo-angular-navigation/fesm2022/progress-kendo-angular-navigation.mjs
var _c0 = ["*"];
var _c1 = ["kendoActionSheetItem", ""];
var _c2 = (a0) => ({
  $implicit: a0
});
function ActionSheetItemComponent_0_ng_template_0_Template(rf, ctx) {
}
function ActionSheetItemComponent_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ActionSheetItemComponent_0_ng_template_0_Template, 0, 0, "ng-template", 2);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.itemTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c2, ctx_r0.item));
  }
}
function ActionSheetItemComponent_ng_template_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 6);
    ɵɵelement(1, "kendo-icon-wrapper", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵstyleMap(ctx_r0.manageIconStyles(ctx_r0.item));
    ɵɵclassMap(ctx_r0.manageIconClasses(ctx_r0.item));
    ɵɵproperty("name", ctx_r0.item.icon)("customFontClass", ctx_r0.item.iconClass)("svgIcon", ctx_r0.item.svgIcon);
  }
}
function ActionSheetItemComponent_ng_template_1_span_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 11);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.item.title);
  }
}
function ActionSheetItemComponent_ng_template_1_span_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 12);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.item.description);
  }
}
function ActionSheetItemComponent_ng_template_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 8);
    ɵɵtemplate(1, ActionSheetItemComponent_ng_template_1_span_2_span_1_Template, 2, 1, "span", 9)(2, ActionSheetItemComponent_ng_template_1_span_2_span_2_Template, 2, 1, "span", 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.item.title);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.item.description);
  }
}
function ActionSheetItemComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 3);
    ɵɵtemplate(1, ActionSheetItemComponent_ng_template_1_span_1_Template, 2, 7, "span", 4)(2, ActionSheetItemComponent_ng_template_1_span_2_Template, 3, 2, "span", 5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.item.icon || ctx_r0.item.iconClass || ctx_r0.item.svgIcon);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.item.title || ctx_r0.item.description);
  }
}
var _c3 = ["kendoActionSheetList", ""];
function ActionSheetListComponent_span_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 1);
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassProp("k-actionsheet-item", true)("k-disabled", item_r1.disabled);
    ɵɵproperty("ngClass", item_r1.cssClass)("ngStyle", item_r1.cssStyle)("itemTemplate", ctx_r1.itemTemplate)("item", item_r1);
    ɵɵattribute("aria-disabled", item_r1.disabled)("kendo-actionsheet-item-index", ctx_r1.setAttrIndex(item_r1));
  }
}
var _c4 = ["childContainer"];
var _c5 = [[["kendo-actionsheet-view"]]];
var _c6 = ["kendo-actionsheet-view"];
var _c7 = (a0, a1) => [a0, a1, "k-actions", "k-actionsheet-footer"];
function ActionSheetComponent_ng_container_0_ng_content_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0, 0, ["*ngIf", "actionSheetViews?.length > 0"]);
  }
}
function ActionSheetComponent_ng_container_0_div_7_1_ng_template_0_Template(rf, ctx) {
}
function ActionSheetComponent_ng_container_0_div_7_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ActionSheetComponent_ng_container_0_div_7_1_ng_template_0_Template, 0, 0, "ng-template", 12);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.actionSheetTemplate == null ? null : ctx_r1.actionSheetTemplate.templateRef);
  }
}
function ActionSheetComponent_ng_container_0_div_7_ng_template_2_div_0_1_ng_template_0_Template(rf, ctx) {
}
function ActionSheetComponent_ng_container_0_div_7_ng_template_2_div_0_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ActionSheetComponent_ng_container_0_div_7_ng_template_2_div_0_1_ng_template_0_Template, 0, 0, "ng-template", 12);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(5);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.headerTemplate == null ? null : ctx_r1.headerTemplate.templateRef);
  }
}
function ActionSheetComponent_ng_container_0_div_7_ng_template_2_div_0_ng_template_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 21);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(6);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.title);
  }
}
function ActionSheetComponent_ng_container_0_div_7_ng_template_2_div_0_ng_template_2_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 22);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(6);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.subtitle);
  }
}
function ActionSheetComponent_ng_container_0_div_7_ng_template_2_div_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 17)(1, "div", 18);
    ɵɵtemplate(2, ActionSheetComponent_ng_container_0_div_7_ng_template_2_div_0_ng_template_2_div_2_Template, 2, 1, "div", 19)(3, ActionSheetComponent_ng_container_0_div_7_ng_template_2_div_0_ng_template_2_div_3_Template, 2, 1, "div", 20);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(5);
    ɵɵadvance();
    ɵɵproperty("id", ctx_r1.titleId);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.title);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.subtitle);
  }
}
function ActionSheetComponent_ng_container_0_div_7_ng_template_2_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 16);
    ɵɵtemplate(1, ActionSheetComponent_ng_container_0_div_7_ng_template_2_div_0_1_Template, 1, 1, null, 11)(2, ActionSheetComponent_ng_container_0_div_7_ng_template_2_div_0_ng_template_2_Template, 4, 3, "ng-template", null, 2, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const defaultHeaderTemplate_r3 = ɵɵreference(3);
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.headerTemplate)("ngIfElse", defaultHeaderTemplate_r3);
  }
}
function ActionSheetComponent_ng_container_0_div_7_ng_template_2_div_1_1_ng_template_0_Template(rf, ctx) {
}
function ActionSheetComponent_ng_container_0_div_7_ng_template_2_div_1_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ActionSheetComponent_ng_container_0_div_7_ng_template_2_div_1_1_ng_template_0_Template, 0, 0, "ng-template", 12);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(5);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.contentTemplate == null ? null : ctx_r1.contentTemplate.templateRef);
  }
}
function ActionSheetComponent_ng_container_0_div_7_ng_template_2_div_1_ng_template_2_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 26);
    ɵɵlistener("itemClick", function ActionSheetComponent_ng_container_0_div_7_ng_template_2_div_1_ng_template_2_div_0_Template_div_itemClick_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext(6);
      return ɵɵresetView(ctx_r1.onItemClick($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(6);
    ɵɵproperty("groupItems", ctx_r1.topGroupItems)("allItems", ctx_r1.items)("itemTemplate", ctx_r1.itemTemplate == null ? null : ctx_r1.itemTemplate.templateRef);
  }
}
function ActionSheetComponent_ng_container_0_div_7_ng_template_2_div_1_ng_template_2_hr_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "hr", 27);
  }
}
function ActionSheetComponent_ng_container_0_div_7_ng_template_2_div_1_ng_template_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 26);
    ɵɵlistener("itemClick", function ActionSheetComponent_ng_container_0_div_7_ng_template_2_div_1_ng_template_2_div_2_Template_div_itemClick_0_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext(6);
      return ɵɵresetView(ctx_r1.onItemClick($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(6);
    ɵɵproperty("groupItems", ctx_r1.bottomGroupItems)("allItems", ctx_r1.items)("itemTemplate", ctx_r1.itemTemplate == null ? null : ctx_r1.itemTemplate.templateRef);
  }
}
function ActionSheetComponent_ng_container_0_div_7_ng_template_2_div_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ActionSheetComponent_ng_container_0_div_7_ng_template_2_div_1_ng_template_2_div_0_Template, 1, 3, "div", 24)(1, ActionSheetComponent_ng_container_0_div_7_ng_template_2_div_1_ng_template_2_hr_1_Template, 1, 0, "hr", 25)(2, ActionSheetComponent_ng_container_0_div_7_ng_template_2_div_1_ng_template_2_div_2_Template, 1, 3, "div", 24);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(5);
    ɵɵproperty("ngIf", ctx_r1.topGroupItems);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.shouldRenderSeparator);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.bottomGroupItems);
  }
}
function ActionSheetComponent_ng_container_0_div_7_ng_template_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 23);
    ɵɵtemplate(1, ActionSheetComponent_ng_container_0_div_7_ng_template_2_div_1_1_Template, 1, 1, null, 11)(2, ActionSheetComponent_ng_container_0_div_7_ng_template_2_div_1_ng_template_2_Template, 3, 3, "ng-template", null, 3, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const defaultContentTemplate_r6 = ɵɵreference(3);
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.contentTemplate)("ngIfElse", defaultContentTemplate_r6);
  }
}
function ActionSheetComponent_ng_container_0_div_7_ng_template_2_div_2_1_ng_template_0_Template(rf, ctx) {
}
function ActionSheetComponent_ng_container_0_div_7_ng_template_2_div_2_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ActionSheetComponent_ng_container_0_div_7_ng_template_2_div_2_1_ng_template_0_Template, 0, 0, "ng-template", 12);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(5);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.footerTemplate == null ? null : ctx_r1.footerTemplate.templateRef);
  }
}
function ActionSheetComponent_ng_container_0_div_7_ng_template_2_div_2_ng_container_2_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 30);
    ɵɵlistener("click", function ActionSheetComponent_ng_container_0_div_7_ng_template_2_div_2_ng_container_2_button_1_Template_button_click_0_listener() {
      const actionButton_r8 = ɵɵrestoreView(_r7).$implicit;
      const ctx_r1 = ɵɵnextContext(6);
      return ɵɵresetView(ctx_r1.action.emit(actionButton_r8));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const actionButton_r8 = ctx.$implicit;
    ɵɵproperty("icon", actionButton_r8.icon)("title", actionButton_r8.title)("svgIcon", actionButton_r8.svgIcon)("themeColor", actionButton_r8.themeColor)("fillMode", actionButton_r8.fillMode)("size", actionButton_r8.size);
    ɵɵattribute("aria-label", actionButton_r8.text);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", actionButton_r8.text, " ");
  }
}
function ActionSheetComponent_ng_container_0_div_7_ng_template_2_div_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ActionSheetComponent_ng_container_0_div_7_ng_template_2_div_2_ng_container_2_button_1_Template, 2, 8, "button", 29);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(5);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.actions);
  }
}
function ActionSheetComponent_ng_container_0_div_7_ng_template_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 28);
    ɵɵtemplate(1, ActionSheetComponent_ng_container_0_div_7_ng_template_2_div_2_1_Template, 1, 1, null, 4)(2, ActionSheetComponent_ng_container_0_div_7_ng_template_2_div_2_ng_container_2_Template, 2, 1, "ng-container", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵproperty("ngClass", ɵɵpureFunction2(3, _c7, ctx_r1.orientationClass, ctx_r1.alignmentClass));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.footerTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.footerTemplate && ctx_r1.actions);
  }
}
function ActionSheetComponent_ng_container_0_div_7_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ActionSheetComponent_ng_container_0_div_7_ng_template_2_div_0_Template, 4, 2, "div", 13)(1, ActionSheetComponent_ng_container_0_div_7_ng_template_2_div_1_Template, 4, 2, "div", 14)(2, ActionSheetComponent_ng_container_0_div_7_ng_template_2_div_2_Template, 3, 6, "div", 15);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("ngIf", ctx_r1.title || ctx_r1.subtitle || ctx_r1.headerTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.items || ctx_r1.contentTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.footerTemplate || ctx_r1.actions);
  }
}
function ActionSheetComponent_ng_container_0_div_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 10);
    ɵɵtemplate(1, ActionSheetComponent_ng_container_0_div_7_1_Template, 1, 1, null, 11)(2, ActionSheetComponent_ng_container_0_div_7_ng_template_2_Template, 3, 3, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const defaultTemplate_r9 = ɵɵreference(3);
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.actionSheetTemplate)("ngIfElse", defaultTemplate_r9);
  }
}
function ActionSheetComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 5);
    ɵɵlistener("click", function ActionSheetComponent_ng_container_0_Template_div_click_1_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onOverlayClick());
    });
    ɵɵelementEnd();
    ɵɵelementStart(2, "div", 6)(3, "div", 7, 0)(5, "div", 8);
    ɵɵtemplate(6, ActionSheetComponent_ng_container_0_ng_content_6_Template, 1, 0, "ng-content", 4)(7, ActionSheetComponent_ng_container_0_div_7_Template, 4, 2, "div", 9);
    ɵɵelementEnd()()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵstyleMap("bottom: 0px; width: 100%;");
    ɵɵadvance(2);
    ɵɵstyleProp("--kendo-actionsheet-view-current", (ctx_r1.actionSheetViews == null ? null : ctx_r1.actionSheetViews.length) > 0 ? ctx_r1.currentView : null);
    ɵɵproperty("ngClass", ctx_r1.cssClass)("ngStyle", ctx_r1.cssStyle);
    ɵɵattribute("aria-labelledby", ctx_r1.titleId);
    ɵɵadvance();
    ɵɵproperty("ngIf", (ctx_r1.actionSheetViews == null ? null : ctx_r1.actionSheetViews.length) > 0);
    ɵɵadvance();
    ɵɵproperty("ngIf", (ctx_r1.actionSheetViews == null ? null : ctx_r1.actionSheetViews.length) === 0);
  }
}
function ActionSheetViewComponent_0_ng_template_0_Template(rf, ctx) {
}
function ActionSheetViewComponent_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ActionSheetViewComponent_0_ng_template_0_Template, 0, 0, "ng-template", 3);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.actionSheetTemplate == null ? null : ctx_r0.actionSheetTemplate.templateRef);
  }
}
function ActionSheetViewComponent_ng_template_1_div_0_1_ng_template_0_Template(rf, ctx) {
}
function ActionSheetViewComponent_ng_template_1_div_0_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ActionSheetViewComponent_ng_template_1_div_0_1_ng_template_0_Template, 0, 0, "ng-template", 3);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.headerTemplate.templateRef);
  }
}
function ActionSheetViewComponent_ng_template_1_div_0_ng_template_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 12);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.title);
  }
}
function ActionSheetViewComponent_ng_template_1_div_0_ng_template_2_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 13);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.subtitle);
  }
}
function ActionSheetViewComponent_ng_template_1_div_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 8)(1, "div", 9);
    ɵɵtemplate(2, ActionSheetViewComponent_ng_template_1_div_0_ng_template_2_div_2_Template, 2, 1, "div", 10)(3, ActionSheetViewComponent_ng_template_1_div_0_ng_template_2_div_3_Template, 2, 1, "div", 11);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("id", ctx_r0.titleId);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.title);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.subtitle);
  }
}
function ActionSheetViewComponent_ng_template_1_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 7);
    ɵɵtemplate(1, ActionSheetViewComponent_ng_template_1_div_0_1_Template, 1, 1, null, 2)(2, ActionSheetViewComponent_ng_template_1_div_0_ng_template_2_Template, 4, 3, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const defaultHeaderTemplate_r2 = ɵɵreference(3);
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.headerTemplate)("ngIfElse", defaultHeaderTemplate_r2);
  }
}
function ActionSheetViewComponent_ng_template_1_div_1_ng_template_1_Template(rf, ctx) {
}
function ActionSheetViewComponent_ng_template_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 14);
    ɵɵtemplate(1, ActionSheetViewComponent_ng_template_1_div_1_ng_template_1_Template, 0, 0, "ng-template", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.contentTemplate.templateRef);
  }
}
function ActionSheetViewComponent_ng_template_1_div_2_ng_template_1_Template(rf, ctx) {
}
function ActionSheetViewComponent_ng_template_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 15);
    ɵɵtemplate(1, ActionSheetViewComponent_ng_template_1_div_2_ng_template_1_Template, 0, 0, "ng-template", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ɵɵpureFunction2(2, _c7, ctx_r0.orientationClass, ctx_r0.alignmentClass));
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.footerTemplate.templateRef);
  }
}
function ActionSheetViewComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ActionSheetViewComponent_ng_template_1_div_0_Template, 4, 2, "div", 4)(1, ActionSheetViewComponent_ng_template_1_div_1_Template, 2, 1, "div", 5)(2, ActionSheetViewComponent_ng_template_1_div_2_Template, 2, 5, "div", 6);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r0.title || ctx_r0.subtitle || ctx_r0.headerTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.contentTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.footerTemplate);
  }
}
var _c8 = ["kendoBottomNavigationItem", ""];
function BottomNavigationItemComponent_ng_container_0_kendo_icon_wrapper_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-icon-wrapper", 3);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("name", ctx_r0.item.icon)("customFontClass", ctx_r0.item.iconClass)("svgIcon", ctx_r0.item.svgIcon);
  }
}
function BottomNavigationItemComponent_ng_container_0_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 4);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.item.text);
  }
}
function BottomNavigationItemComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, BottomNavigationItemComponent_ng_container_0_kendo_icon_wrapper_1_Template, 1, 3, "kendo-icon-wrapper", 1)(2, BottomNavigationItemComponent_ng_container_0_span_2_Template, 2, 1, "span", 2);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.itemIcon);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.item.text);
  }
}
function BottomNavigationItemComponent_1_ng_template_0_Template(rf, ctx) {
}
function BottomNavigationItemComponent_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, BottomNavigationItemComponent_1_ng_template_0_Template, 0, 0, "ng-template", 5);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.itemTemplate == null ? null : ctx_r0.itemTemplate.templateRef)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c2, ctx_r0.item));
  }
}
function BottomNavigationComponent_ng_container_0_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 2);
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const idx_r2 = ctx.index;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("disabledComponent", ctx_r2.disabled)("item", item_r1)("index", idx_r2)("selectedIdx", ctx_r2.selectedIdx)("itemTemplate", ctx_r2.itemTemplate)("ngClass", item_r1.cssClass)("ngStyle", item_r1.cssStyle)("orientation", ctx_r2.itemFlow);
    ɵɵattribute("data-kendo-bottomnavigation-index", idx_r2);
  }
}
function BottomNavigationComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, BottomNavigationComponent_ng_container_0_span_1_Template, 1, 9, "span", 1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r2.items);
  }
}
var _c9 = ["kendoBreadCrumbItem", ""];
var _c10 = [[["", "kendoBreadCrumbSeparator", ""]]];
var _c11 = ["[kendoBreadCrumbSeparator]"];
var _c12 = (a0, a1, a2, a3, a4) => ({
  "k-breadcrumb-root-link": a0,
  "k-breadcrumb-link": a1,
  "k-breadcrumb-icontext-link": a2,
  "k-breadcrumb-icon-link": a3,
  "k-disabled": a4
});
var _c13 = (a0, a1) => ({
  $implicit: a0,
  index: a1
});
function BreadCrumbItemComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0);
  }
}
function BreadCrumbItemComponent_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function BreadCrumbItemComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, BreadCrumbItemComponent_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 2);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    ɵɵnextContext();
    const separator_r1 = ɵɵreference(1);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", separator_r1);
  }
}
function BreadCrumbItemComponent_ng_container_3_span_1_img_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "img", 8);
    ɵɵlistener("load", function BreadCrumbItemComponent_ng_container_3_span_1_img_1_Template_img_load_0_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r2.onImageLoad());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵproperty("src", ctx_r2.item.data.imageUrl, ɵɵsanitizeUrl);
  }
}
function BreadCrumbItemComponent_ng_container_3_span_1_kendo_icon_wrapper_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-icon-wrapper", 9);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵproperty("name", ctx_r2.item.data.icon)("customFontClass", ctx_r2.item.data.iconClass)("svgIcon", ctx_r2.item.data.svgIcon);
  }
}
function BreadCrumbItemComponent_ng_container_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 4);
    ɵɵtemplate(1, BreadCrumbItemComponent_ng_container_3_span_1_img_1_Template, 1, 1, "img", 5)(2, BreadCrumbItemComponent_ng_container_3_span_1_kendo_icon_wrapper_2_Template, 1, 3, "kendo-icon-wrapper", 6);
    ɵɵelementStart(3, "span", 7);
    ɵɵtext(4);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ɵɵpureFunction5(8, _c12, ctx_r2.item.context.isFirst, ctx_r2.index !== 0, (!!ctx_r2.item.data.icon || !!ctx_r2.item.data.svgIcon) && !!ctx_r2.item.data.text, (!!ctx_r2.item.data.icon || !!ctx_r2.item.data.svgIcon) && !ctx_r2.item.data.text, ctx_r2.disabled))("title", ctx_r2.item.data.title || "")("tabindex", ctx_r2.disabled ? -1 : 0);
    ɵɵattribute("aria-disabled", ctx_r2.disabled)("aria-current", ctx_r2.item.context.isLast ? "page" : null);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.item.data.imageUrl);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.item.data.icon || ctx_r2.item.data.iconClass || ctx_r2.item.data.svgIcon);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r2.item.data.text);
  }
}
function BreadCrumbItemComponent_ng_container_3_2_ng_template_0_Template(rf, ctx) {
}
function BreadCrumbItemComponent_ng_container_3_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, BreadCrumbItemComponent_ng_container_3_2_ng_template_0_Template, 0, 0, "ng-template", 10);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r2.itemTemplate)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c13, ctx_r2.item.data, ctx_r2.index));
  }
}
function BreadCrumbItemComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, BreadCrumbItemComponent_ng_container_3_span_1_Template, 5, 14, "span", 3)(2, BreadCrumbItemComponent_ng_container_3_2_Template, 1, 5, null, 1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.itemTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.itemTemplate);
  }
}
function BreadCrumbItemComponent_ng_container_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function BreadCrumbItemComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, BreadCrumbItemComponent_ng_container_4_ng_container_1_Template, 1, 0, "ng-container", 2);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    ɵɵnextContext();
    const separator_r1 = ɵɵreference(1);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", separator_r1);
  }
}
var _c14 = ["kendoBreadCrumbSeparator", ""];
var _c15 = ["kendoBreadCrumbList", ""];
function BreadCrumbListComponent_ng_container_0_li_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 5);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("icon", ctx_r0.separatorIcon)("svgIcon", ctx_r0.separatorSVGIcon);
  }
}
function BreadCrumbListComponent_ng_container_0_li_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 5);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("icon", ctx_r0.separatorIcon)("svgIcon", ctx_r0.separatorSVGIcon);
  }
}
function BreadCrumbListComponent_ng_container_0_li_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 3, 0);
    ɵɵtemplate(2, BreadCrumbListComponent_ng_container_0_li_1_span_2_Template, 1, 2, "span", 4)(3, BreadCrumbListComponent_ng_container_0_li_1_span_3_Template, 1, 2, "span", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    const item_r3 = ctx_r1.$implicit;
    const i_r4 = ctx_r1.index;
    const isFirst_r5 = ctx_r1.first;
    const isLast_r6 = ctx_r1.last;
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("item", item_r3)("index", i_r4)("collapseMode", ctx_r0.collapseMode)("itemTemplate", ctx_r0.itemTemplate);
    ɵɵattribute("data-kendo-breadcrumb-index", i_r4);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r0.collapseMode === "wrap" && !isFirst_r5);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.collapseMode !== "wrap" && !isLast_r6 && !((item_r3 == null ? null : item_r3.context.collapsed) && (ctx_r0.items[i_r4 + 1] == null ? null : ctx_r0.items[i_r4 + 1].context.collapsed)));
  }
}
function BreadCrumbListComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, BreadCrumbListComponent_ng_container_0_li_1_Template, 4, 7, "li", 2);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const isFirst_r5 = ctx.first;
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", !(ctx_r0.collapseMode === "wrap" && isFirst_r5) || ctx_r0.isRootItemContainer);
  }
}
var _c16 = ["resizeSensor"];
var _c17 = ["itemsContainer"];
var _c18 = (a0, a1) => ({
  "!k-flex-wrap": a0,
  "k-flex-none": a1
});
function BreadCrumbComponent_ol_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "ol", 5, 0);
    ɵɵpipe(2, "async");
    ɵɵlistener("itemClick", function BreadCrumbComponent_ol_0_Template_ol_itemClick_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.itemClick.emit($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("items", ɵɵpipeBind1(2, 5, ctx_r2.firstItem$))("itemTemplate", ctx_r2.itemTemplate == null ? null : ctx_r2.itemTemplate.templateRef)("collapseMode", ctx_r2.collapseMode)("separatorIcon", ctx_r2.separatorIcon)("separatorSVGIcon", ctx_r2.separatorSVGIcon);
  }
}
var packageMetadata = {
  name: "@progress/kendo-angular-navigation",
  productName: "Kendo UI for Angular",
  productCode: "KENDOUIANGULAR",
  productCodes: ["KENDOUIANGULAR"],
  publishDate: 1763638730,
  version: "21.1.0",
  licensingDocsUrl: "https://www.telerik.com/kendo-angular-ui/my-license/"
};
var DEFAULT_THEME_COLOR = "light";
var DEFAULT_POSITION = "top";
var DEFAULT_POSITION_MODE = "static";
var AppBarComponent = class _AppBarComponent {
  localizationService;
  host;
  renderer;
  hostClass = true;
  /**
   * @hidden
   */
  direction;
  /**
   * Specifies the position of the AppBar
   * ([see example]({% slug positioning_appbar %}#toc-position)).
   *
   * @default 'top'
   */
  set position(position) {
    const newPosition = position ? position : DEFAULT_POSITION;
    this.handleHostClasses(newPosition, this.position);
    this._position = newPosition;
  }
  get position() {
    return this._position;
  }
  /**
   * Sets the position mode of the AppBar ([see example](slug:positioning_appbar#toc-position-mode)).
   *
   * @default 'static'
   */
  set positionMode(positionMode) {
    const newPositionMode = positionMode ? positionMode : DEFAULT_POSITION_MODE;
    this.handleHostClasses(newPositionMode, this.positionMode);
    this._positionMode = newPositionMode;
  }
  get positionMode() {
    return this._positionMode;
  }
  /**
   * Sets the theme color of the AppBar. The theme color is applied as the background color of the component.
   *
   * @default 'light'
   */
  set themeColor(themeColor) {
    const newThemeColor = themeColor ? themeColor : DEFAULT_THEME_COLOR;
    this.handleHostClasses(newThemeColor, this.themeColor);
    this._themeColor = newThemeColor;
  }
  get themeColor() {
    return this._themeColor;
  }
  dynamicRTLSubscription;
  rtl = false;
  _themeColor = DEFAULT_THEME_COLOR;
  _position = DEFAULT_POSITION;
  _positionMode = DEFAULT_POSITION_MODE;
  constructor(localizationService, host, renderer) {
    this.localizationService = localizationService;
    this.host = host;
    this.renderer = renderer;
    validatePackage(packageMetadata);
    this.dynamicRTLSubscription = this.localizationService.changes.subscribe(({
      rtl
    }) => {
      this.rtl = rtl;
      this.direction = this.rtl ? "rtl" : "ltr";
    });
  }
  ngAfterViewInit() {
    const stylingOptions = ["position", "positionMode", "themeColor"];
    stylingOptions.forEach((input) => {
      this.handleHostClasses(this[input]);
    });
  }
  ngOnDestroy() {
    if (this.dynamicRTLSubscription) {
      this.dynamicRTLSubscription.unsubscribe();
    }
  }
  handleHostClasses(newValue, previousValue) {
    const elem = this.host.nativeElement;
    if (previousValue && newValue === previousValue) {
      return;
    }
    if (previousValue) {
      this.renderer.removeClass(elem, `k-appbar-${previousValue}`);
    }
    if (newValue) {
      this.renderer.addClass(elem, `k-appbar-${newValue}`);
    }
  }
  static ɵfac = function AppBarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppBarComponent)(ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _AppBarComponent,
    selectors: [["kendo-appbar"]],
    hostVars: 3,
    hostBindings: function AppBarComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("dir", ctx.direction);
        ɵɵclassProp("k-appbar", ctx.hostClass);
      }
    },
    inputs: {
      position: "position",
      positionMode: "positionMode",
      themeColor: "themeColor"
    },
    exportAs: ["kendoAppBar"],
    features: [ɵɵProvidersFeature([LocalizationService, {
      provide: L10N_PREFIX,
      useValue: "kendo.appbar.component"
    }])],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function AppBarComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppBarComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoAppBar",
      selector: "kendo-appbar",
      template: `
        <ng-content></ng-content>
    `,
      providers: [LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.appbar.component"
      }],
      standalone: true
    }]
  }], () => [{
    type: LocalizationService
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }], {
    hostClass: [{
      type: HostBinding,
      args: ["class.k-appbar"]
    }],
    direction: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    position: [{
      type: Input
    }],
    positionMode: [{
      type: Input
    }],
    themeColor: [{
      type: Input
    }]
  });
})();
var AppBarSectionComponent = class _AppBarSectionComponent {
  hostClass = true;
  static ɵfac = function AppBarSectionComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppBarSectionComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _AppBarSectionComponent,
    selectors: [["kendo-appbar-section"]],
    hostVars: 2,
    hostBindings: function AppBarSectionComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("k-appbar-section", ctx.hostClass);
      }
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function AppBarSectionComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppBarSectionComponent, [{
    type: Component,
    args: [{
      selector: "kendo-appbar-section",
      template: `
        <ng-content></ng-content>
    `,
      standalone: true
    }]
  }], null, {
    hostClass: [{
      type: HostBinding,
      args: ["class.k-appbar-section"]
    }]
  });
})();
var isPresent2 = (value) => value !== null && value !== void 0;
var outerWidth = (element) => {
  const style2 = getComputedStyle(element);
  let width = parseFloat(style2.width);
  width += (parseFloat(style2.marginLeft) || 0) + (parseFloat(style2.marginRight) || 0);
  return width;
};
var getFirstAndLastFocusable = (parent) => {
  const all = getAllFocusableChildren(parent);
  const firstFocusable = all.length > 0 ? all[0] : parent;
  const lastFocusable = all.length > 0 ? all[all.length - 1] : parent;
  return [firstFocusable, lastFocusable];
};
var getAllFocusableChildren = (parent) => {
  return parent.querySelectorAll(focusableSelector);
};
var idx = 0;
var hexColorRegex = /^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;
var getId = (prefix) => {
  return `${prefix}${++idx}`;
};
var ACTIONSHEET_ITEM_INDEX_ATTRIBUTE = "kendo-actionsheet-item-index";
var getActionSheetItemIndex = (target, targetAttr, scope) => {
  const item = closestItem$1(target, targetAttr, scope);
  if (item) {
    return itemIndex$1(item, targetAttr);
  }
};
var itemIndex$1 = (item, indexAttr) => +item.getAttribute(indexAttr);
var hasItemIndex$1 = (item, indexAttr) => isPresent2(item.getAttribute(indexAttr));
var closestItem$1 = (target, targetAttr, scope) => closestInScope(target, (el) => hasItemIndex$1(el, targetAttr), scope);
var AppBarSpacerComponent = class _AppBarSpacerComponent {
  renderer;
  element;
  hostClass = true;
  get sizedClass() {
    return isPresent2(this.width);
  }
  /**
   * Specifies the width of the AppBarSpacer.
   *
   * If not set, the AppBarSpacer will take all of the available space.
   */
  width;
  constructor(renderer, element) {
    this.renderer = renderer;
    this.element = element;
  }
  ngAfterViewInit() {
    if (isPresent2(this.width)) {
      const element = this.element.nativeElement;
      this.renderer.setStyle(element, "flexBasis", this.width);
    }
  }
  static ɵfac = function AppBarSpacerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppBarSpacerComponent)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _AppBarSpacerComponent,
    selectors: [["kendo-appbar-spacer"]],
    hostVars: 4,
    hostBindings: function AppBarSpacerComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("k-spacer", ctx.hostClass)("k-spacer-sized", ctx.sizedClass);
      }
    },
    inputs: {
      width: "width"
    },
    decls: 0,
    vars: 0,
    template: function AppBarSpacerComponent_Template(rf, ctx) {
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppBarSpacerComponent, [{
    type: Component,
    args: [{
      selector: "kendo-appbar-spacer",
      template: ``,
      standalone: true
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }], {
    hostClass: [{
      type: HostBinding,
      args: ["class.k-spacer"]
    }],
    sizedClass: [{
      type: HostBinding,
      args: ["class.k-spacer-sized"]
    }],
    width: [{
      type: Input
    }]
  });
})();
var ActionSheetHeaderTemplateDirective = class _ActionSheetHeaderTemplateDirective {
  templateRef;
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static ɵfac = function ActionSheetHeaderTemplateDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ActionSheetHeaderTemplateDirective)(ɵɵdirectiveInject(TemplateRef, 8));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _ActionSheetHeaderTemplateDirective,
    selectors: [["", "kendoActionSheetHeaderTemplate", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ActionSheetHeaderTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoActionSheetHeaderTemplate]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
var ActionSheetItemTemplateDirective = class _ActionSheetItemTemplateDirective {
  templateRef;
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static ɵfac = function ActionSheetItemTemplateDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ActionSheetItemTemplateDirective)(ɵɵdirectiveInject(TemplateRef, 8));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _ActionSheetItemTemplateDirective,
    selectors: [["", "kendoActionSheetItemTemplate", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ActionSheetItemTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoActionSheetItemTemplate]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
var ActionSheetContentTemplateDirective = class _ActionSheetContentTemplateDirective {
  templateRef;
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static ɵfac = function ActionSheetContentTemplateDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ActionSheetContentTemplateDirective)(ɵɵdirectiveInject(TemplateRef, 8));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _ActionSheetContentTemplateDirective,
    selectors: [["", "kendoActionSheetContentTemplate", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ActionSheetContentTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoActionSheetContentTemplate]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
var ActionSheetFooterTemplateDirective = class _ActionSheetFooterTemplateDirective {
  templateRef;
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static ɵfac = function ActionSheetFooterTemplateDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ActionSheetFooterTemplateDirective)(ɵɵdirectiveInject(TemplateRef, 8));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _ActionSheetFooterTemplateDirective,
    selectors: [["", "kendoActionSheetFooterTemplate", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ActionSheetFooterTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoActionSheetFooterTemplate]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
var ActionSheetTemplateDirective = class _ActionSheetTemplateDirective {
  templateRef;
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static ɵfac = function ActionSheetTemplateDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ActionSheetTemplateDirective)(ɵɵdirectiveInject(TemplateRef, 8));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _ActionSheetTemplateDirective,
    selectors: [["", "kendoActionSheetTemplate", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ActionSheetTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoActionSheetTemplate]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
function slideUp(duration, height) {
  return [style({
    overflow: "hidden",
    display: "block",
    height: 0
  }), animate(`${duration}ms ease-in`, style({
    height: `${height}`
  }))];
}
function slideDown(duration, height) {
  return [style({
    overflow: "hidden",
    height: `${height}`
  }), animate(`${duration}ms ease-in`, style({
    overflow: "hidden",
    height: 0
  }))];
}
var ActionSheetItemComponent = class _ActionSheetItemComponent {
  itemTemplate;
  item;
  pointerClass = true;
  manageIconClasses(item) {
    const classes = ["k-actionsheet-item-icon"];
    const isHexColor = isPresent2(item.iconColor) && hexColorRegex.test(item.iconColor);
    const isThemeColor = isPresent2(item.iconColor) && item.iconColor !== "" && !isHexColor;
    if (isThemeColor) {
      classes.push(`k-text-${item.iconColor}`);
    }
    return classes.join(" ");
  }
  manageIconStyles(item) {
    const isHexColor = isPresent2(item.iconColor) && hexColorRegex.test(item.iconColor);
    const isSizeSet = isPresent2(item.iconSize) && item.iconSize !== "";
    const styles = {};
    if (isHexColor) {
      styles.color = item.iconColor;
    }
    if (isSizeSet) {
      styles.fontSize = item.iconSize;
    }
    return styles;
  }
  static ɵfac = function ActionSheetItemComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ActionSheetItemComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _ActionSheetItemComponent,
    selectors: [["", "kendoActionSheetItem", ""]],
    hostVars: 2,
    hostBindings: function ActionSheetItemComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("k-cursor-pointer", ctx.pointerClass);
      }
    },
    inputs: {
      itemTemplate: "itemTemplate",
      item: "item"
    },
    attrs: _c1,
    decls: 3,
    vars: 2,
    consts: [["defaultTemplate", ""], [4, "ngIf", "ngIfElse"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "k-actionsheet-action"], ["class", "k-icon-wrap", 4, "ngIf"], ["class", "k-actionsheet-item-text", 4, "ngIf"], [1, "k-icon-wrap"], [3, "name", "customFontClass", "svgIcon"], [1, "k-actionsheet-item-text"], ["class", "k-actionsheet-item-title", 4, "ngIf"], ["class", "k-actionsheet-item-description", 4, "ngIf"], [1, "k-actionsheet-item-title"], [1, "k-actionsheet-item-description"]],
    template: function ActionSheetItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, ActionSheetItemComponent_0_Template, 1, 4, null, 1)(1, ActionSheetItemComponent_ng_template_1_Template, 3, 2, "ng-template", null, 0, ɵɵtemplateRefExtractor);
      }
      if (rf & 2) {
        const defaultTemplate_r2 = ɵɵreference(2);
        ɵɵproperty("ngIf", ctx.itemTemplate)("ngIfElse", defaultTemplate_r2);
      }
    },
    dependencies: [NgIf, NgTemplateOutlet, IconWrapperComponent],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ActionSheetItemComponent, [{
    type: Component,
    args: [{
      // eslint-disable-next-line @angular-eslint/component-selector
      selector: "[kendoActionSheetItem]",
      template: `
        <ng-template *ngIf="itemTemplate; else defaultTemplate"
            [ngTemplateOutlet]="itemTemplate"
            [ngTemplateOutletContext]="{
                $implicit: item
            }">
        </ng-template>
        <ng-template #defaultTemplate>
            <span class="k-actionsheet-action">
                <span *ngIf="item.icon || item.iconClass || item.svgIcon" class="k-icon-wrap">
                    <kendo-icon-wrapper
                        [name]="item.icon"
                        [customFontClass]="item.iconClass"
                        [class]="manageIconClasses(item)"
                        [svgIcon]="item.svgIcon"
                        [style]="manageIconStyles(item)"
                    >
                    </kendo-icon-wrapper>
                </span>
                <span *ngIf="item.title || item.description" class="k-actionsheet-item-text">
                    <span *ngIf="item.title" class="k-actionsheet-item-title">{{item.title}}</span>
                    <span *ngIf="item.description" class="k-actionsheet-item-description">{{item.description}}</span>
                </span>
            </span>
        </ng-template>
    `,
      standalone: true,
      imports: [NgIf, NgTemplateOutlet, IconWrapperComponent]
    }]
  }], null, {
    itemTemplate: [{
      type: Input
    }],
    item: [{
      type: Input
    }],
    pointerClass: [{
      type: HostBinding,
      args: ["class.k-cursor-pointer"]
    }]
  });
})();
var ActionSheetListComponent = class _ActionSheetListComponent {
  renderer;
  ngZone;
  element;
  groupItems = [];
  allItems = [];
  itemTemplate;
  itemClick = new EventEmitter();
  subscriptions = new Subscription();
  constructor(renderer, ngZone, element) {
    this.renderer = renderer;
    this.ngZone = ngZone;
    this.element = element;
  }
  ngAfterViewInit() {
    this.initDomEvents();
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  initDomEvents() {
    if (!this.element) {
      return;
    }
    this.ngZone.runOutsideAngular(() => {
      const nativeElement = this.element.nativeElement;
      this.subscriptions.add(this.renderer.listen(nativeElement, "click", this.clickHandler.bind(this)));
    });
  }
  clickHandler(e) {
    const itemIndex2 = getActionSheetItemIndex(e.target, ACTIONSHEET_ITEM_INDEX_ATTRIBUTE, this.element.nativeElement);
    const item = this.allItems[itemIndex2];
    if (!item) {
      return;
    }
    if (item.disabled) {
      e.preventDefault();
      return;
    }
    this.ngZone.run(() => {
      this.itemClick.emit({
        item,
        originalEvent: e
      });
    });
  }
  setAttrIndex(item) {
    return this.allItems.indexOf(item);
  }
  static ɵfac = function ActionSheetListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ActionSheetListComponent)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ElementRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _ActionSheetListComponent,
    selectors: [["", "kendoActionSheetList", ""]],
    inputs: {
      groupItems: "groupItems",
      allItems: "allItems",
      itemTemplate: "itemTemplate"
    },
    outputs: {
      itemClick: "itemClick"
    },
    attrs: _c3,
    decls: 1,
    vars: 1,
    consts: [["kendoActionSheetItem", "", "tabindex", "0", "role", "button", 3, "k-actionsheet-item", "k-disabled", "ngClass", "ngStyle", "itemTemplate", "item", 4, "ngFor", "ngForOf"], ["kendoActionSheetItem", "", "tabindex", "0", "role", "button", 3, "ngClass", "ngStyle", "itemTemplate", "item"]],
    template: function ActionSheetListComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, ActionSheetListComponent_span_0_Template, 1, 10, "span", 0);
      }
      if (rf & 2) {
        ɵɵproperty("ngForOf", ctx.groupItems);
      }
    },
    dependencies: [NgForOf, ActionSheetItemComponent, NgClass, NgStyle],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ActionSheetListComponent, [{
    type: Component,
    args: [{
      // eslint-disable-next-line @angular-eslint/component-selector
      selector: "[kendoActionSheetList]",
      template: `
            <span *ngFor="let item of groupItems" kendoActionSheetItem
                tabindex="0"
                role="button"
                [attr.aria-disabled]="item.disabled"
                [class.k-actionsheet-item]="true"
                [attr.${ACTIONSHEET_ITEM_INDEX_ATTRIBUTE}]="setAttrIndex(item)"
                [class.k-disabled]="item.disabled"
                [ngClass]="item.cssClass"
                [ngStyle]="item.cssStyle"
                [itemTemplate]="itemTemplate"
                [item]="item">
            </span>
    `,
      standalone: true,
      imports: [NgForOf, ActionSheetItemComponent, NgClass, NgStyle]
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: NgZone
  }, {
    type: ElementRef
  }], {
    groupItems: [{
      type: Input
    }],
    allItems: [{
      type: Input
    }],
    itemTemplate: [{
      type: Input
    }],
    itemClick: [{
      type: Output
    }]
  });
})();
var DEFAULT_ANIMATION_CONFIG = {
  duration: 300
};
var ActionSheetComponent = class _ActionSheetComponent {
  element;
  ngZone;
  renderer;
  localizationService;
  builder;
  cdr;
  /**
   * @hidden
   */
  currentView = 1;
  /**
   * @hidden
   */
  get hostClass() {
    return this.expanded;
  }
  /**
   * @hidden
   */
  direction;
  /**
   * Specifies the action buttons displayed in the ActionSheet footer.
   */
  actions;
  /**
   * Configures the layout of the action buttons in the footer. By default, actions are arranged horizontally and stretched to fill the container.
   */
  actionsLayout = {
    orientation: "horizontal",
    alignment: "stretched"
  };
  /**
   * Determines whether the ActionSheet closes when the overlay is clicked.
   *
   * @default false
   */
  overlayClickClose = false;
  /**
   * Sets the title text displayed in the ActionSheet header.
   */
  title;
  /**
   * Sets the subtitle text displayed below the title in the header.
   */
  subtitle;
  /**
   * Provides the collection of items rendered in the ActionSheet content area.
   */
  items;
  /**
   * Applies CSS classes to the inner ActionSheet element. Accepts any value supported by [`ngClass`](link:site.data.urls.angular['ngclassapi']).
   */
  cssClass;
  /**
   * Applies inline styles to the inner ActionSheet element. Accepts any value supported by [`ngStyle`](link:site.data.urls.angular['ngstyleapi']).
   */
  cssStyle;
  /**
   * Configures the opening and closing animations for the ActionSheet ([see example](slug:animations_actionsheet)).
   *
   * @default true
   */
  animation = true;
  /**
   * Controls whether the ActionSheet is expanded or collapsed.
   *
   * @default false
   */
  expanded = false;
  /**
   * Sets the `aria-labelledby` attribute of the ActionSheet wrapper element.
   * Use this option when the built-in header element is replaced through the [`ActionSheetHeaderTemplate`](slug:api_navigation_actionsheetheadertemplatedirective)
   * or [`ActionSheetContentTemplate`](slug:api_navigation_actionsheetcontenttemplatedirective).
   */
  titleId = getId("k-actionsheet-title");
  /**
   * @hidden
   *
   * Determines if the ActionSheet should focus the first focusable element when opened.
   */
  initialFocus = true;
  /**
   * Fires when the `expanded` property of the component is updated.
   * You can use this event to provide two-way binding for the `expanded` property.
   */
  expandedChange = new EventEmitter();
  /**
   * Fires when any of the ActionSheet action buttons is clicked.
   */
  action = new EventEmitter();
  /**
   * Fires when the ActionSheet is expanded and its animation is complete.
   */
  expand = new EventEmitter();
  /**
   * Fires when the ActionSheet is collapsed and its animation is complete.
   */
  collapse = new EventEmitter();
  /**
   * Fires when an ActionSheet item is clicked.
   */
  itemClick = new EventEmitter();
  /**
   * Fires when the modal overlay is clicked.
   */
  overlayClick = new EventEmitter();
  /**
   * @hidden
   */
  childContainer;
  /**
   * @hidden
   */
  actionSheetViews;
  /**
   * @hidden
   */
  actionSheetTemplate;
  /**
   * @hidden
   */
  headerTemplate;
  /**
   * @hidden
   */
  contentTemplate;
  /**
   * @hidden
   */
  itemTemplate;
  /**
   * @hidden
   */
  footerTemplate;
  dynamicRTLSubscription;
  rtl = false;
  domSubs = new Subscription();
  player;
  animationEnd = new EventEmitter();
  constructor(element, ngZone, renderer, localizationService, builder, cdr) {
    this.element = element;
    this.ngZone = ngZone;
    this.renderer = renderer;
    this.localizationService = localizationService;
    this.builder = builder;
    this.cdr = cdr;
    validatePackage(packageMetadata);
    this.dynamicRTLSubscription = this.localizationService.changes.subscribe(({
      rtl
    }) => {
      this.rtl = rtl;
      this.direction = this.rtl ? "rtl" : "ltr";
    });
  }
  ngAfterViewInit() {
    this.initDomEvents();
    this.setCssVariables();
  }
  ngOnChanges(changes) {
    if (changes["expanded"] && this.expanded) {
      this.setExpanded(true);
    }
  }
  ngOnDestroy() {
    this.domSubs.unsubscribe();
    if (this.dynamicRTLSubscription) {
      this.dynamicRTLSubscription.unsubscribe();
    }
    if (this.player) {
      this.player.destroy();
    }
  }
  /**
   * @hidden
   * Navigates to the next view.
   */
  nextView() {
    if (this.currentView < this.actionSheetViews.length) {
      this.currentView += 1;
    }
  }
  /**
   * @hidden
   * Navigates to the previous view.
   */
  prevView() {
    if (this.currentView > 1) {
      this.currentView -= 1;
    }
  }
  /**
   * Toggles the visibility of the ActionSheet.
   *
   * @param expanded? - Boolean. Specifies if the ActionSheet will be expanded or collapsed.
   */
  toggle(expanded2) {
    const previous = this.expanded;
    const current = isPresent(expanded2) ? expanded2 : !previous;
    if (current === previous) {
      return;
    }
    if (current === true) {
      this.setExpanded(true);
    } else if (current === false && !this.animation) {
      this.setExpanded(false);
    }
    if (this.animation) {
      this.animationEnd.pipe(take(1)).subscribe(() => {
        this.onAnimationEnd(current);
      });
      this.playAnimation(current);
    } else {
      this[current ? "expand" : "collapse"].emit();
    }
  }
  /**
   * @hidden
   */
  get orientationClass() {
    return this.actionsLayout.orientation ? `k-actions-${this.actionsLayout.orientation}` : "";
  }
  /**
   * @hidden
   */
  get alignmentClass() {
    return this.actionsLayout.alignment ? `k-actions-${this.actionsLayout.alignment}` : "";
  }
  /**
   * @hidden
   */
  get topGroupItems() {
    return this.items?.filter((item) => !item.group || item.group === "top");
  }
  /**
   * @hidden
   */
  get bottomGroupItems() {
    return this.items?.filter((item) => item.group === "bottom");
  }
  /**
   * @hidden
   */
  onItemClick(ev) {
    this.itemClick.emit(ev);
  }
  /**
   * @hidden
   */
  onOverlayClick() {
    this.overlayClick.emit();
    if (this.overlayClickClose) {
      this.toggle(false);
    }
  }
  /**
   * @hidden
   */
  get shouldRenderSeparator() {
    return this.topGroupItems?.length > 0 && this.bottomGroupItems?.length > 0;
  }
  initDomEvents() {
    if (!this.element) {
      return;
    }
    this.ngZone.runOutsideAngular(() => {
      this.domSubs.add(this.renderer.listen(this.element.nativeElement, "keydown", (ev) => {
        this.onKeyDown(ev);
      }));
    });
  }
  setCssVariables() {
    if (!this.element || !isDocumentAvailable()) {
      return;
    }
    this.element.nativeElement.style.setProperty("--kendo-actionsheet-height", "auto");
    this.element.nativeElement.style.setProperty("--kendo-actionsheet-max-height", "none");
  }
  onKeyDown(event) {
    const target = event.target;
    if (event.code === Keys.Tab) {
      this.ngZone.run(() => {
        this.keepFocusWithinComponent(target, event);
      });
    }
    if (event.code === Keys.Escape) {
      this.ngZone.run(() => {
        this.overlayClick.emit();
      });
    }
    if (event.code === Keys.Enter || event.code === Keys.NumpadEnter) {
      this.ngZone.run(() => {
        this.triggerItemClick(target, event);
      });
    }
  }
  handleInitialFocus() {
    const [firstFocusable] = getFirstAndLastFocusable(this.element.nativeElement);
    if (firstFocusable && this.initialFocus) {
      firstFocusable.focus();
    }
  }
  keepFocusWithinComponent(target, event) {
    const wrapper = this.element.nativeElement;
    const [firstFocusable, lastFocusable] = getFirstAndLastFocusable(wrapper);
    const tabAfterLastFocusable = !event.shiftKey && target === lastFocusable;
    const shiftTabAfterFirstFocusable = event.shiftKey && target === firstFocusable;
    if (tabAfterLastFocusable) {
      event.preventDefault();
      firstFocusable.focus();
    }
    if (shiftTabAfterFirstFocusable) {
      event.preventDefault();
      lastFocusable.focus();
    }
  }
  triggerItemClick(target, event) {
    const itemIndex2 = getActionSheetItemIndex(target, ACTIONSHEET_ITEM_INDEX_ATTRIBUTE, this.element.nativeElement);
    const item = isPresent(itemIndex2) ? this.items[itemIndex2] : null;
    if (!item || item.disabled) {
      return;
    }
    this.itemClick.emit({
      item,
      originalEvent: event
    });
  }
  setExpanded(value) {
    this.expanded = value;
    this.expandedChange.emit(value);
    if (this.expanded) {
      this.cdr.detectChanges();
      this.handleInitialFocus();
    }
  }
  onAnimationEnd(currentExpanded) {
    if (currentExpanded) {
      this.expand.emit();
    } else {
      this.setExpanded(false);
      this.collapse.emit();
    }
  }
  playAnimation(expanded2) {
    const duration = typeof this.animation !== "boolean" && this.animation.duration ? this.animation.duration : DEFAULT_ANIMATION_CONFIG.duration;
    const contentHeight = getComputedStyle(this.childContainer.nativeElement).height;
    const animation = expanded2 ? slideUp(duration, contentHeight) : slideDown(duration, contentHeight);
    const factory = this.builder.build(animation);
    this.player = factory.create(this.childContainer.nativeElement);
    this.player.onDone(() => {
      if (this.player) {
        this.animationEnd.emit();
        this.player.destroy();
        this.player = null;
      }
    });
    this.player.play();
  }
  static ɵfac = function ActionSheetComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ActionSheetComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(AnimationBuilder), ɵɵdirectiveInject(ChangeDetectorRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _ActionSheetComponent,
    selectors: [["kendo-actionsheet"]],
    contentQueries: function ActionSheetComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, ActionSheetTemplateDirective, 5);
        ɵɵcontentQuery(dirIndex, ActionSheetHeaderTemplateDirective, 5);
        ɵɵcontentQuery(dirIndex, ActionSheetContentTemplateDirective, 5);
        ɵɵcontentQuery(dirIndex, ActionSheetItemTemplateDirective, 5);
        ɵɵcontentQuery(dirIndex, ActionSheetFooterTemplateDirective, 5);
        ɵɵcontentQuery(dirIndex, ActionSheetViewComponent, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.actionSheetTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.headerTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.itemTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.footerTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.actionSheetViews = _t);
      }
    },
    viewQuery: function ActionSheetComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c4, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.childContainer = _t.first);
      }
    },
    hostVars: 3,
    hostBindings: function ActionSheetComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("dir", ctx.direction);
        ɵɵclassProp("k-actionsheet-container", ctx.hostClass);
      }
    },
    inputs: {
      actions: "actions",
      actionsLayout: "actionsLayout",
      overlayClickClose: "overlayClickClose",
      title: "title",
      subtitle: "subtitle",
      items: "items",
      cssClass: "cssClass",
      cssStyle: "cssStyle",
      animation: "animation",
      expanded: "expanded",
      titleId: "titleId",
      initialFocus: "initialFocus"
    },
    outputs: {
      expandedChange: "expandedChange",
      action: "action",
      expand: "expand",
      collapse: "collapse",
      itemClick: "itemClick",
      overlayClick: "overlayClick"
    },
    exportAs: ["kendoActionSheet"],
    features: [ɵɵProvidersFeature([LocalizationService, {
      provide: L10N_PREFIX,
      useValue: "kendo.actionsheet.component"
    }]), ɵɵNgOnChangesFeature],
    ngContentSelectors: _c6,
    decls: 1,
    vars: 1,
    consts: [["childContainer", ""], ["defaultTemplate", ""], ["defaultHeaderTemplate", ""], ["defaultContentTemplate", ""], [4, "ngIf"], [1, "k-overlay", 3, "click"], [1, "k-animation-container", "k-animation-container-shown"], [1, "k-child-animation-container"], ["role", "dialog", "aria-modal", "true", 1, "k-actionsheet", "k-actionsheet-bottom", 3, "ngClass", "ngStyle"], ["class", "k-actionsheet-view", 4, "ngIf"], [1, "k-actionsheet-view"], [4, "ngIf", "ngIfElse"], [3, "ngTemplateOutlet"], ["class", "k-actionsheet-titlebar", 4, "ngIf"], ["class", "k-actionsheet-content", 4, "ngIf"], [3, "ngClass", 4, "ngIf"], [1, "k-actionsheet-titlebar"], [1, "k-actionsheet-titlebar-group", "k-hbox"], [1, "k-actionsheet-title", 3, "id"], ["class", "k-text-center", 4, "ngIf"], ["class", "k-actionsheet-subtitle k-text-center", 4, "ngIf"], [1, "k-text-center"], [1, "k-actionsheet-subtitle", "k-text-center"], [1, "k-actionsheet-content"], ["kendoActionSheetList", "", "class", "k-list-ul", "role", "group", 3, "groupItems", "allItems", "itemTemplate", "itemClick", 4, "ngIf"], ["class", "k-hr", 4, "ngIf"], ["kendoActionSheetList", "", "role", "group", 1, "k-list-ul", 3, "itemClick", "groupItems", "allItems", "itemTemplate"], [1, "k-hr"], [3, "ngClass"], ["kendoButton", "", "type", "button", 3, "icon", "title", "svgIcon", "themeColor", "fillMode", "size", "click", 4, "ngFor", "ngForOf"], ["kendoButton", "", "type", "button", 3, "click", "icon", "title", "svgIcon", "themeColor", "fillMode", "size"]],
    template: function ActionSheetComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef(_c5);
        ɵɵtemplate(0, ActionSheetComponent_ng_container_0_Template, 8, 9, "ng-container", 4);
      }
      if (rf & 2) {
        ɵɵproperty("ngIf", ctx.expanded);
      }
    },
    dependencies: [NgIf, NgForOf, NgStyle, NgClass, NgTemplateOutlet, ActionSheetListComponent, ButtonComponent],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ActionSheetComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoActionSheet",
      selector: "kendo-actionsheet",
      template: `
        <ng-container *ngIf="expanded">
            <div class="k-overlay" (click)="onOverlayClick()"></div>
            <div class="k-animation-container k-animation-container-shown">
                <div #childContainer class="k-child-animation-container" [style]="'bottom: 0px; width: 100%;'">
                    <div
                        class="k-actionsheet k-actionsheet-bottom"
                        [ngClass]="cssClass"
                        [ngStyle]="cssStyle"
                        role="dialog"
                        aria-modal="true"
                        [attr.aria-labelledby]="titleId"
                        [style.--kendo-actionsheet-view-current]="actionSheetViews?.length > 0 ? currentView : null"
                    >
                        <ng-content *ngIf="actionSheetViews?.length > 0" select="kendo-actionsheet-view"></ng-content>

                        <div *ngIf="actionSheetViews?.length === 0" class="k-actionsheet-view">
                            <ng-template *ngIf="actionSheetTemplate; else defaultTemplate"
                                [ngTemplateOutlet]="actionSheetTemplate?.templateRef">
                            </ng-template>

                            <ng-template #defaultTemplate>
                                <div *ngIf="title || subtitle || headerTemplate" class="k-actionsheet-titlebar">
                                    <ng-template *ngIf="headerTemplate; else defaultHeaderTemplate"
                                        [ngTemplateOutlet]="headerTemplate?.templateRef">
                                    </ng-template>

                                    <ng-template #defaultHeaderTemplate>
                                        <div class="k-actionsheet-titlebar-group k-hbox">
                                            <div class="k-actionsheet-title" [id]="titleId">
                                                <div *ngIf="title" class="k-text-center">{{title}}</div>
                                                <div *ngIf="subtitle" class="k-actionsheet-subtitle k-text-center">{{subtitle}}</div>
                                            </div>
                                        </div>
                                    </ng-template>
                                </div>

                                <div *ngIf="items || contentTemplate" class="k-actionsheet-content">
                                    <ng-template *ngIf="contentTemplate; else defaultContentTemplate"
                                        [ngTemplateOutlet]="contentTemplate?.templateRef">
                                    </ng-template>
                                    <ng-template #defaultContentTemplate>
                                        <div *ngIf="topGroupItems" kendoActionSheetList
                                            class="k-list-ul"
                                            role="group"
                                            [groupItems]="topGroupItems"
                                            [allItems]="items"
                                            [itemTemplate]="itemTemplate?.templateRef"
                                            (itemClick)="onItemClick($event)">
                                        </div>
                
                                        <hr *ngIf="shouldRenderSeparator" class="k-hr"/>
                
                                        <div *ngIf="bottomGroupItems" kendoActionSheetList
                                            class="k-list-ul"
                                            role="group"
                                            [groupItems]="bottomGroupItems"
                                            [allItems]="items"
                                            [itemTemplate]="itemTemplate?.templateRef"
                                            (itemClick)="onItemClick($event)">
                                        </div>
                                    </ng-template>
                                </div>
                                <div *ngIf="footerTemplate || actions" [ngClass]="[orientationClass, alignmentClass, 'k-actions', 'k-actionsheet-footer']">
                                    <ng-template
                                        *ngIf="footerTemplate"
                                        [ngTemplateOutlet]="footerTemplate?.templateRef">
                                    </ng-template>

                                    <ng-container *ngIf="!footerTemplate && actions">
                                        <button
                                            *ngFor="let actionButton of actions"
                                            kendoButton
                                            type="button"
                                            [icon]="actionButton.icon"
                                            [title]="actionButton.title"
                                            [svgIcon]="actionButton.svgIcon"
                                            [themeColor]="actionButton.themeColor"
                                            [fillMode]="actionButton.fillMode"
                                            [size]="actionButton.size"
                                            [attr.aria-label]="actionButton.text"
                                            (click)="action.emit(actionButton)"
                                        >
                                            {{ actionButton.text }}
                                        </button>
                                    </ng-container>
                                </div>
                            </ng-template>
                        </div>
                    </div>
                </div>
            </div>
        </ng-container>
    `,
      providers: [LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.actionsheet.component"
      }],
      standalone: true,
      imports: [NgIf, NgForOf, NgStyle, NgClass, NgTemplateOutlet, ActionSheetListComponent, ButtonComponent]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: NgZone
  }, {
    type: Renderer2
  }, {
    type: LocalizationService
  }, {
    type: AnimationBuilder
  }, {
    type: ChangeDetectorRef
  }], {
    hostClass: [{
      type: HostBinding,
      args: ["class.k-actionsheet-container"]
    }],
    direction: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    actions: [{
      type: Input
    }],
    actionsLayout: [{
      type: Input
    }],
    overlayClickClose: [{
      type: Input
    }],
    title: [{
      type: Input
    }],
    subtitle: [{
      type: Input
    }],
    items: [{
      type: Input
    }],
    cssClass: [{
      type: Input
    }],
    cssStyle: [{
      type: Input
    }],
    animation: [{
      type: Input
    }],
    expanded: [{
      type: Input
    }],
    titleId: [{
      type: Input
    }],
    initialFocus: [{
      type: Input
    }],
    expandedChange: [{
      type: Output
    }],
    action: [{
      type: Output
    }],
    expand: [{
      type: Output
    }],
    collapse: [{
      type: Output
    }],
    itemClick: [{
      type: Output
    }],
    overlayClick: [{
      type: Output
    }],
    childContainer: [{
      type: ViewChild,
      args: ["childContainer"]
    }],
    actionSheetViews: [{
      type: ContentChildren,
      args: [forwardRef(() => ActionSheetViewComponent)]
    }],
    actionSheetTemplate: [{
      type: ContentChild,
      args: [ActionSheetTemplateDirective]
    }],
    headerTemplate: [{
      type: ContentChild,
      args: [ActionSheetHeaderTemplateDirective]
    }],
    contentTemplate: [{
      type: ContentChild,
      args: [ActionSheetContentTemplateDirective]
    }],
    itemTemplate: [{
      type: ContentChild,
      args: [ActionSheetItemTemplateDirective]
    }],
    footerTemplate: [{
      type: ContentChild,
      args: [ActionSheetFooterTemplateDirective]
    }]
  });
})();
var ActionSheetViewComponent = class _ActionSheetViewComponent {
  actionSheet;
  renderer;
  host;
  zone;
  title;
  subtitle;
  titleId = getId("k-actionsheet-title");
  hostClass = true;
  transitionDuration = "500ms";
  transitionProperty = "transform";
  headerTemplate;
  contentTemplate;
  footerTemplate;
  actionSheetTemplate;
  ngAfterViewInit() {
    this.zone.onStable.pipe(take(1)).subscribe(() => {
      if (this.actionSheet?.actionSheetViews?.length > 1) {
        this.renderer.addClass(this.host.nativeElement, "k-actionsheet-view-animated");
      }
    });
  }
  constructor(actionSheet, renderer, host, zone) {
    this.actionSheet = actionSheet;
    this.renderer = renderer;
    this.host = host;
    this.zone = zone;
  }
  get orientationClass() {
    return this.actionSheet?.orientationClass;
  }
  get alignmentClass() {
    return this.actionSheet?.alignmentClass;
  }
  static ɵfac = function ActionSheetViewComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ActionSheetViewComponent)(ɵɵdirectiveInject(ActionSheetComponent, 9), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _ActionSheetViewComponent,
    selectors: [["kendo-actionsheet-view"]],
    contentQueries: function ActionSheetViewComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, ActionSheetHeaderTemplateDirective, 5);
        ɵɵcontentQuery(dirIndex, ActionSheetContentTemplateDirective, 5);
        ɵɵcontentQuery(dirIndex, ActionSheetFooterTemplateDirective, 5);
        ɵɵcontentQuery(dirIndex, ActionSheetTemplateDirective, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.headerTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.footerTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.actionSheetTemplate = _t.first);
      }
    },
    hostVars: 6,
    hostBindings: function ActionSheetViewComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵstyleProp("transition-duration", ctx.transitionDuration)("transition-property", ctx.transitionProperty);
        ɵɵclassProp("k-actionsheet-view", ctx.hostClass);
      }
    },
    inputs: {
      title: "title",
      subtitle: "subtitle",
      titleId: "titleId"
    },
    decls: 3,
    vars: 2,
    consts: [["defaultTemplate", ""], ["defaultHeaderTemplate", ""], [4, "ngIf", "ngIfElse"], [3, "ngTemplateOutlet"], ["class", "k-actionsheet-titlebar", 4, "ngIf"], ["class", "k-actionsheet-content", 4, "ngIf"], [3, "ngClass", 4, "ngIf"], [1, "k-actionsheet-titlebar"], [1, "k-actionsheet-titlebar-group", "k-hbox"], [1, "k-actionsheet-title", 3, "id"], ["class", "k-text-center", 4, "ngIf"], ["class", "k-actionsheet-subtitle k-text-center", 4, "ngIf"], [1, "k-text-center"], [1, "k-actionsheet-subtitle", "k-text-center"], [1, "k-actionsheet-content"], [3, "ngClass"]],
    template: function ActionSheetViewComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, ActionSheetViewComponent_0_Template, 1, 1, null, 2)(1, ActionSheetViewComponent_ng_template_1_Template, 3, 3, "ng-template", null, 0, ɵɵtemplateRefExtractor);
      }
      if (rf & 2) {
        const defaultTemplate_r3 = ɵɵreference(2);
        ɵɵproperty("ngIf", ctx.actionSheetTemplate)("ngIfElse", defaultTemplate_r3);
      }
    },
    dependencies: [NgIf, NgClass, NgTemplateOutlet],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ActionSheetViewComponent, [{
    type: Component,
    args: [{
      selector: "kendo-actionsheet-view",
      template: `
        <ng-template *ngIf="actionSheetTemplate; else defaultTemplate"
            [ngTemplateOutlet]="actionSheetTemplate?.templateRef">
        </ng-template>

        <ng-template #defaultTemplate>
            <div *ngIf="title || subtitle || headerTemplate" class="k-actionsheet-titlebar">
                <ng-template *ngIf="headerTemplate; else defaultHeaderTemplate" [ngTemplateOutlet]="headerTemplate.templateRef">
                </ng-template>

                <ng-template #defaultHeaderTemplate>
                    <div class="k-actionsheet-titlebar-group k-hbox">
                        <div class="k-actionsheet-title" [id]="titleId">
                            <div *ngIf="title" class="k-text-center">{{title}}</div>
                            <div *ngIf="subtitle" class="k-actionsheet-subtitle k-text-center">{{subtitle}}</div>
                        </div>
                    </div>
                </ng-template>
            </div>

            <div *ngIf="contentTemplate" class="k-actionsheet-content">
                <ng-template [ngTemplateOutlet]="contentTemplate.templateRef">
                </ng-template>
            </div>

            <div *ngIf="footerTemplate" [ngClass]="[orientationClass, alignmentClass, 'k-actions', 'k-actionsheet-footer']">
                <ng-template [ngTemplateOutlet]="footerTemplate.templateRef">
                </ng-template>
            </div>
        </ng-template>
    `,
      standalone: true,
      imports: [NgIf, NgClass, NgTemplateOutlet]
    }]
  }], () => [{
    type: ActionSheetComponent,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }]
  }, {
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    title: [{
      type: Input
    }],
    subtitle: [{
      type: Input
    }],
    titleId: [{
      type: Input
    }],
    hostClass: [{
      type: HostBinding,
      args: ["class.k-actionsheet-view"]
    }],
    transitionDuration: [{
      type: HostBinding,
      args: ["style.transition-duration"]
    }],
    transitionProperty: [{
      type: HostBinding,
      args: ["style.transition-property"]
    }],
    headerTemplate: [{
      type: ContentChild,
      args: [ActionSheetHeaderTemplateDirective]
    }],
    contentTemplate: [{
      type: ContentChild,
      args: [ActionSheetContentTemplateDirective]
    }],
    footerTemplate: [{
      type: ContentChild,
      args: [ActionSheetFooterTemplateDirective]
    }],
    actionSheetTemplate: [{
      type: ContentChild,
      args: [ActionSheetTemplateDirective]
    }]
  });
})();
var PreventableEvent2 = class {
  prevented = false;
  /**
   * Prevents the default action for a specified event.
   * In this way, the source component suppresses
   * the built-in behavior that follows the event.
   */
  preventDefault() {
    this.prevented = true;
  }
  /**
   * Returns `true` if the event was prevented
   * by any of its subscribers.
   *
   * @returns `true` if the default action was prevented.
   * Otherwise, returns `false`.
   */
  isDefaultPrevented() {
    return this.prevented;
  }
  /**
   * @hidden
   */
  constructor(args) {
    Object.assign(this, args);
  }
};
var BottomNavigationSelectEvent = class extends PreventableEvent2 {
  /**
   * Represents the index of the selected item in the `items` collection.
   */
  index;
  /**
   * Represents the selected BottomNavigation item.
   */
  item;
  /**
   * Provides the DOM event that triggered the selection.
   */
  originalEvent;
  /**
   * Provides a reference to the BottomNavigation instance that triggered the event.
   */
  sender;
  /**
   * @hidden
   */
  constructor(args) {
    super();
    Object.assign(this, args);
  }
};
var BottomNavigationItemTemplateDirective = class _BottomNavigationItemTemplateDirective {
  templateRef;
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static ɵfac = function BottomNavigationItemTemplateDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BottomNavigationItemTemplateDirective)(ɵɵdirectiveInject(TemplateRef, 8));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _BottomNavigationItemTemplateDirective,
    selectors: [["", "kendoBottomNavigationItemTemplate", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BottomNavigationItemTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoBottomNavigationItemTemplate]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
var closestInScope2 = (target, targetAttr, predicate, scope) => {
  while (target && target !== scope && !predicate(target, targetAttr)) {
    target = target.parentNode;
  }
  if (target !== scope) {
    return target;
  }
};
var hasItemIndex = (item, indexAttr) => isPresent2(item.getAttribute(indexAttr));
var itemIndex = (item, indexAttr) => +item.getAttribute(indexAttr);
var closestItem = (target, targetAttr, scope) => closestInScope2(target, targetAttr, hasItemIndex, scope);
var BOTTOMNAVIGATION_ITEM_INDEX = "data-kendo-bottomnavigation-index";
var colors = ["primary", "secondary", "tertiary", "info", "success", "warning", "error", "dark", "light", "inverse"];
var BottomNavigationItemComponent = class _BottomNavigationItemComponent {
  itemTemplate;
  item;
  index;
  disabledComponent;
  selectedIdx;
  orientation;
  get disabledClass() {
    return this.item.disabled;
  }
  get label() {
    return this.item.text ? this.item.text : null;
  }
  get tabindex() {
    return this.item.tabIndex ? this.item.tabIndex : 0;
  }
  get selectedClass() {
    return this.selectedIdx ? this.selectedIdx === this.index : this.item.selected;
  }
  get itemIcon() {
    return Boolean(this.item.icon || this.item.iconClass || this.item.svgIcon);
  }
  get iconClasses() {
    const kendoIcon = this.item.icon ? `k-icon k-i-${this.item.icon}` : "";
    const customIcon = this.item.iconClass ? this.item.iconClass : "";
    return `${kendoIcon} ${customIcon}`;
  }
  static ɵfac = function BottomNavigationItemComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BottomNavigationItemComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _BottomNavigationItemComponent,
    selectors: [["", "kendoBottomNavigationItem", ""]],
    hostVars: 8,
    hostBindings: function BottomNavigationItemComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("aria-disabled", ctx.disabledClass)("aria-label", ctx.label)("tabindex", ctx.tabindex)("aria-current", ctx.selectedClass);
        ɵɵclassProp("k-disabled", ctx.disabledClass)("k-selected", ctx.selectedClass);
      }
    },
    inputs: {
      itemTemplate: "itemTemplate",
      item: "item",
      index: "index",
      disabledComponent: "disabledComponent",
      selectedIdx: "selectedIdx",
      orientation: "orientation"
    },
    attrs: _c8,
    decls: 2,
    vars: 2,
    consts: [[4, "ngIf"], ["innerCssClass", "k-bottom-nav-item-icon", "size", "xlarge", 3, "name", "customFontClass", "svgIcon", 4, "ngIf"], ["class", "k-bottom-nav-item-text", 4, "ngIf"], ["innerCssClass", "k-bottom-nav-item-icon", "size", "xlarge", 3, "name", "customFontClass", "svgIcon"], [1, "k-bottom-nav-item-text"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
    template: function BottomNavigationItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, BottomNavigationItemComponent_ng_container_0_Template, 3, 2, "ng-container", 0)(1, BottomNavigationItemComponent_1_Template, 1, 4, null, 0);
      }
      if (rf & 2) {
        ɵɵproperty("ngIf", !ctx.itemTemplate);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.itemTemplate);
      }
    },
    dependencies: [NgIf, IconWrapperComponent, NgTemplateOutlet],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BottomNavigationItemComponent, [{
    type: Component,
    args: [{
      // eslint-disable-next-line @angular-eslint/component-selector
      selector: "[kendoBottomNavigationItem]",
      template: `
        <ng-container *ngIf="!itemTemplate">
            <kendo-icon-wrapper *ngIf="itemIcon"
                innerCssClass="k-bottom-nav-item-icon"
                size="xlarge"
                [name]="item.icon"
                [customFontClass]="item.iconClass"
                [svgIcon]="item.svgIcon"></kendo-icon-wrapper>
            <span *ngIf="item.text" class="k-bottom-nav-item-text">{{item.text}}</span>
        </ng-container>
        <ng-template *ngIf="itemTemplate"
            [ngTemplateOutlet]="itemTemplate?.templateRef"
            [ngTemplateOutletContext]="{ $implicit: item }">
        </ng-template>
    `,
      standalone: true,
      imports: [NgIf, IconWrapperComponent, NgTemplateOutlet]
    }]
  }], null, {
    itemTemplate: [{
      type: Input
    }],
    item: [{
      type: Input
    }],
    index: [{
      type: Input
    }],
    disabledComponent: [{
      type: Input
    }],
    selectedIdx: [{
      type: Input
    }],
    orientation: [{
      type: Input
    }],
    disabledClass: [{
      type: HostBinding,
      args: ["attr.aria-disabled"]
    }, {
      type: HostBinding,
      args: ["class.k-disabled"]
    }],
    label: [{
      type: HostBinding,
      args: ["attr.aria-label"]
    }],
    tabindex: [{
      type: HostBinding,
      args: ["attr.tabindex"]
    }],
    selectedClass: [{
      type: HostBinding,
      args: ["attr.aria-current"]
    }, {
      type: HostBinding,
      args: ["class.k-selected"]
    }]
  });
})();
var BottomNavigationComponent = class _BottomNavigationComponent {
  localization;
  hostElement;
  ngZone;
  changeDetector;
  renderer;
  /**
   * Provides the collection of items rendered in the BottomNavigation ([see example]({% slug items_bottomnavigation %})).
   */
  items;
  /**
   * Shows a top border on the BottomNavigation ([see example]({% slug appearance_bottomnavigation %})).
   *
   * @default false
   */
  border = false;
  /**
   * Disables the entire BottomNavigation.
   *
   * @default false
   */
  disabled = false;
  /**
   * Sets the fill style of the BottomNavigation ([see example]({% slug appearance_bottomnavigation %})).
   *
   * @default 'flat'
   */
  set fill(fill) {
    this.renderer.removeClass(this._nativeHostElement, `k-bottom-nav-${this.fill}`);
    this.renderer.removeClass(this._nativeHostElement, `k-bottom-nav-${this.fill}-${this.themeColor}`);
    this._fill = fill === "solid" ? "solid" : "flat";
    this.renderer.addClass(this._nativeHostElement, `k-bottom-nav-${this._fill}`);
    this.renderer.addClass(this._nativeHostElement, `k-bottom-nav-${this._fill}-${this.themeColor}`);
  }
  get fill() {
    return this._fill;
  }
  /**
   * Controls how the icon and text label are positioned in the BottomNavigation items.
   *
   * @default 'vertical'
   */
  set itemFlow(itemFlow) {
    this.renderer.removeClass(this._nativeHostElement, `k-bottom-nav-item-flow-${this.itemFlow}`);
    this._itemFlow = itemFlow === "horizontal" ? "horizontal" : "vertical";
    this.renderer.addClass(this._nativeHostElement, `k-bottom-nav-item-flow-${this._itemFlow}`);
  }
  get itemFlow() {
    return this._itemFlow;
  }
  /**
   * Sets the position and behavior of the BottomNavigation when the page is scrollable ([see example]({% slug positioning_bottomnavigation %})).
   *
   * @default 'fixed'
   */
  set positionMode(positionMode) {
    this.renderer.removeClass(this._nativeHostElement, `k-pos-${this.positionMode}`);
    this._positionMode = positionMode === "sticky" ? "sticky" : "fixed";
    this.renderer.addClass(this._nativeHostElement, `k-pos-${this._positionMode}`);
  }
  get positionMode() {
    return this._positionMode;
  }
  /**
   * Sets the theme color of the BottomNavigation ([see example]({% slug appearance_bottomnavigation %})).
   *
   * @default 'primary'
   */
  set themeColor(themeColor) {
    const newColor = colors.find((color) => color === themeColor);
    if (newColor) {
      this.renderer.removeClass(this._nativeHostElement, `k-bottom-nav-${this.fill}-${this._themeColor}`);
      this._themeColor = themeColor;
      this.renderer.addClass(this._nativeHostElement, `k-bottom-nav-${this.fill}-${this._themeColor}`);
    }
  }
  get themeColor() {
    return this._themeColor;
  }
  /**
   * Fires when a user selects an item. This event is preventable.
   */
  select = new EventEmitter();
  /**
   * @hidden
   */
  hostClass = true;
  /**
   * @hidden
   */
  get borderClass() {
    return this.border;
  }
  /**
   * @hidden
   */
  get disabledClass() {
    return this.disabled;
  }
  /**
   * @hidden
   */
  role = "navigation";
  /**
   * @hidden
   */
  direction;
  /**
   * @hidden
   */
  itemTemplate;
  /**
   * @hidden
   */
  selectedIdx;
  _fill = "flat";
  _itemFlow = "vertical";
  _positionMode = "fixed";
  _themeColor = "primary";
  _nativeHostElement;
  dynamicRTLSubscription;
  subscriptions = new Subscription();
  rtl = false;
  constructor(localization, hostElement, ngZone, changeDetector, renderer) {
    this.localization = localization;
    this.hostElement = hostElement;
    this.ngZone = ngZone;
    this.changeDetector = changeDetector;
    this.renderer = renderer;
    validatePackage(packageMetadata);
    this._nativeHostElement = this.hostElement.nativeElement;
    this.dynamicRTLSubscription = this.localization.changes.subscribe(({
      rtl
    }) => {
      this.rtl = rtl;
      this.direction = this.rtl ? "rtl" : "ltr";
    });
  }
  /**
   * @hidden
   */
  ngOnInit() {
    this.initDomEvents();
  }
  /**
   * @hidden
   */
  ngAfterViewInit() {
    this.applyClasses();
  }
  /**
   * @hidden
   */
  ngOnDestroy() {
    if (this.dynamicRTLSubscription) {
      this.dynamicRTLSubscription.unsubscribe();
    }
    this.subscriptions.unsubscribe();
  }
  /**
   * @hidden
   */
  selectItem(idx2, args) {
    const eventArgs = new BottomNavigationSelectEvent(__spreadValues({}, args));
    this.select.emit(eventArgs);
    if (!eventArgs.isDefaultPrevented()) {
      this.selectedIdx = idx2;
    }
  }
  applyClasses() {
    this.renderer.addClass(this._nativeHostElement, `k-bottom-nav-${this.fill}`);
    this.renderer.addClass(this._nativeHostElement, `k-bottom-nav-item-flow-${this.itemFlow}`);
    this.renderer.addClass(this._nativeHostElement, `k-pos-${this.positionMode}`);
    this.renderer.addClass(this._nativeHostElement, `k-bottom-nav-${this.fill}-${this.themeColor}`);
  }
  initDomEvents() {
    if (!this.hostElement) {
      return;
    }
    this.ngZone.runOutsideAngular(() => {
      this.subscriptions.add(this.renderer.listen(this._nativeHostElement, "click", this.clickHandler.bind(this)));
      this.subscriptions.add(this.renderer.listen(this._nativeHostElement, "keydown", this.keyDownHandler.bind(this)));
    });
  }
  clickHandler(e) {
    const itemIdx = this.getBottomNavigationItemIndex(e.target);
    const item = this.items[itemIdx];
    if (!item) {
      return;
    }
    if (item.disabled) {
      e.preventDefault();
      return;
    }
    const args = {
      index: itemIdx,
      item,
      originalEvent: e,
      sender: this
    };
    this.ngZone.run(() => {
      this.selectItem(itemIdx, args);
      this.changeDetector.markForCheck();
    });
  }
  keyDownHandler(e) {
    const isEnterOrSpace = e.code === Keys.Enter || e.code === Keys.NumpadEnter || e.code === Keys.Space;
    if (!isEnterOrSpace) {
      return;
    }
    this.clickHandler(e);
  }
  getBottomNavigationItemIndex(target) {
    const item = closestItem(target, BOTTOMNAVIGATION_ITEM_INDEX, this._nativeHostElement);
    if (item) {
      return itemIndex(item, BOTTOMNAVIGATION_ITEM_INDEX);
    }
  }
  static ɵfac = function BottomNavigationComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BottomNavigationComponent)(ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Renderer2));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _BottomNavigationComponent,
    selectors: [["kendo-bottomnavigation"]],
    contentQueries: function BottomNavigationComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, BottomNavigationItemTemplateDirective, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.itemTemplate = _t.first);
      }
    },
    hostVars: 8,
    hostBindings: function BottomNavigationComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("role", ctx.role)("dir", ctx.direction);
        ɵɵclassProp("k-bottom-nav", ctx.hostClass)("k-bottom-nav-border", ctx.borderClass)("k-disabled", ctx.disabledClass);
      }
    },
    inputs: {
      items: "items",
      border: "border",
      disabled: "disabled",
      fill: "fill",
      itemFlow: "itemFlow",
      positionMode: "positionMode",
      themeColor: "themeColor"
    },
    outputs: {
      select: "select"
    },
    exportAs: ["kendoBottomNavigation"],
    features: [ɵɵProvidersFeature([LocalizationService, {
      provide: L10N_PREFIX,
      useValue: "kendo.bottomnavigation"
    }])],
    decls: 1,
    vars: 1,
    consts: [[4, "ngIf"], ["kendoBottomNavigationItem", "", "role", "link", "class", "k-bottom-nav-item", 3, "disabledComponent", "item", "index", "selectedIdx", "itemTemplate", "ngClass", "ngStyle", "orientation", 4, "ngFor", "ngForOf"], ["kendoBottomNavigationItem", "", "role", "link", 1, "k-bottom-nav-item", 3, "disabledComponent", "item", "index", "selectedIdx", "itemTemplate", "ngClass", "ngStyle", "orientation"]],
    template: function BottomNavigationComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, BottomNavigationComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
      }
      if (rf & 2) {
        ɵɵproperty("ngIf", ctx.items);
      }
    },
    dependencies: [NgIf, NgForOf, BottomNavigationItemComponent, NgClass, NgStyle],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BottomNavigationComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoBottomNavigation",
      selector: "kendo-bottomnavigation",
      providers: [LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.bottomnavigation"
      }],
      template: `
        <ng-container *ngIf="items">
            <span kendoBottomNavigationItem
                *ngFor="let item of items; let idx=index"
                role="link"
                class="k-bottom-nav-item"
                [disabledComponent]="disabled"
                [item]="item"
                [index]="idx"
                [selectedIdx]="selectedIdx"
                [itemTemplate]="itemTemplate"
                [attr.${BOTTOMNAVIGATION_ITEM_INDEX}]="idx"
                [ngClass]="item.cssClass"
                [ngStyle]="item.cssStyle"
                [orientation]="itemFlow">
            </span>
        </ng-container>
    `,
      standalone: true,
      imports: [NgIf, NgForOf, BottomNavigationItemComponent, NgClass, NgStyle]
    }]
  }], () => [{
    type: LocalizationService
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }, {
    type: ChangeDetectorRef
  }, {
    type: Renderer2
  }], {
    items: [{
      type: Input
    }],
    border: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    fill: [{
      type: Input
    }],
    itemFlow: [{
      type: Input
    }],
    positionMode: [{
      type: Input
    }],
    themeColor: [{
      type: Input
    }],
    select: [{
      type: Output
    }],
    hostClass: [{
      type: HostBinding,
      args: ["class.k-bottom-nav"]
    }],
    borderClass: [{
      type: HostBinding,
      args: ["class.k-bottom-nav-border"]
    }],
    disabledClass: [{
      type: HostBinding,
      args: ["class.k-disabled"]
    }],
    role: [{
      type: HostBinding,
      args: ["attr.role"]
    }],
    direction: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    itemTemplate: [{
      type: ContentChild,
      args: [BottomNavigationItemTemplateDirective, {
        static: false
      }]
    }]
  });
})();
var BreadCrumbItemTemplateDirective = class _BreadCrumbItemTemplateDirective {
  templateRef;
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static ɵfac = function BreadCrumbItemTemplateDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BreadCrumbItemTemplateDirective)(ɵɵdirectiveInject(TemplateRef, 8));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _BreadCrumbItemTemplateDirective,
    selectors: [["", "kendoBreadCrumbItemTemplate", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BreadCrumbItemTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoBreadCrumbItemTemplate]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
var BREADCRUMB_ITEM_INDEX = "data-kendo-breadcrumb-index";
var DEFAULT_SIZE = "medium";
var SIZES = {
  small: "sm",
  medium: "md",
  large: "lg"
};
var getStylingClasses = (stylingOption, previousValue, newValue) => {
  switch (stylingOption) {
    case "size":
      return {
        toRemove: `k-breadcrumb-${SIZES[previousValue]}`,
        toAdd: newValue !== "none" ? `k-breadcrumb-${SIZES[newValue]}` : ""
      };
    default:
      break;
  }
};
var BreadCrumbItemComponent = class _BreadCrumbItemComponent {
  el;
  item;
  collapseMode;
  index = -1;
  itemTemplate;
  hostClasses = true;
  get isRootItem() {
    return this.item.context.isFirst;
  }
  get isDisabled() {
    return this.disabled || null;
  }
  get isLastItem() {
    return this.item.context.isLast;
  }
  width;
  disabled = false;
  constructor(el) {
    this.el = el;
  }
  ngOnInit() {
    this.disabled = this.item.data && (this.item.data.disabled || this.item.context.isLast);
  }
  ngAfterViewInit() {
    if (isDocumentAvailable()) {
      this.width = outerWidth(this.el.nativeElement);
    }
  }
  onImageLoad() {
    if (isDocumentAvailable()) {
      this.width = outerWidth(this.el.nativeElement);
    }
  }
  static ɵfac = function BreadCrumbItemComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BreadCrumbItemComponent)(ɵɵdirectiveInject(ElementRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _BreadCrumbItemComponent,
    selectors: [["", "kendoBreadCrumbItem", ""]],
    hostVars: 7,
    hostBindings: function BreadCrumbItemComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("aria-disabled", ctx.isDisabled);
        ɵɵclassProp("k-breadcrumb-item", ctx.hostClasses)("k-breadcrumb-root-item", ctx.isRootItem)("k-breadcrumb-last-item", ctx.isLastItem);
      }
    },
    inputs: {
      item: "item",
      collapseMode: "collapseMode",
      index: "index",
      itemTemplate: "itemTemplate"
    },
    attrs: _c9,
    ngContentSelectors: _c11,
    decls: 5,
    vars: 3,
    consts: [["separator", ""], [4, "ngIf"], [4, "ngTemplateOutlet"], ["role", "link", 3, "ngClass", "title", "tabindex", 4, "ngIf"], ["role", "link", 3, "ngClass", "title", "tabindex"], ["class", "k-image", "role", "presentation", 3, "src", "load", 4, "ngIf"], [3, "name", "customFontClass", "svgIcon", 4, "ngIf"], [1, "k-breadcrumb-item-text"], ["role", "presentation", 1, "k-image", 3, "load", "src"], [3, "name", "customFontClass", "svgIcon"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
    template: function BreadCrumbItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef(_c10);
        ɵɵtemplate(0, BreadCrumbItemComponent_ng_template_0_Template, 1, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor)(2, BreadCrumbItemComponent_ng_container_2_Template, 2, 1, "ng-container", 1)(3, BreadCrumbItemComponent_ng_container_3_Template, 3, 2, "ng-container", 1)(4, BreadCrumbItemComponent_ng_container_4_Template, 2, 1, "ng-container", 1);
      }
      if (rf & 2) {
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.collapseMode === "wrap");
        ɵɵadvance();
        ɵɵproperty("ngIf", !ctx.item.context.collapsed);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.collapseMode !== "wrap");
      }
    },
    dependencies: [NgIf, NgTemplateOutlet, NgClass, IconWrapperComponent],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BreadCrumbItemComponent, [{
    type: Component,
    args: [{
      // eslint-disable-next-line @angular-eslint/component-selector
      selector: "[kendoBreadCrumbItem]",
      template: `
        <ng-template #separator>
            <ng-content select="[kendoBreadCrumbSeparator]"></ng-content>
        </ng-template>

        <ng-container *ngIf="collapseMode === 'wrap'">
            <ng-container *ngTemplateOutlet="separator"></ng-container>
        </ng-container>

        <ng-container *ngIf="!item.context.collapsed">
            <span
                *ngIf="!itemTemplate"
                [ngClass]="{
                    'k-breadcrumb-root-link': item.context.isFirst,
                    'k-breadcrumb-link': index !== 0,
                    'k-breadcrumb-icontext-link': (!!item.data.icon || !!item.data.svgIcon) && !!item.data.text,
                    'k-breadcrumb-icon-link': (!!item.data.icon || !!item.data.svgIcon) && !item.data.text,
                    'k-disabled': disabled
                }"
                [title]="item.data.title || ''"
                [tabindex]="disabled ? -1 : 0"
                [attr.aria-disabled]="disabled"
                [attr.aria-current]="item.context.isLast ? 'page' : null"
                role="link"
            >
                <img *ngIf="item.data.imageUrl" (load)="onImageLoad()" [src]="item.data.imageUrl" class="k-image" role="presentation" />
                <kendo-icon-wrapper *ngIf="item.data.icon || item.data.iconClass || item.data.svgIcon"
                    [name]="item.data.icon"
                    [customFontClass]="item.data.iconClass"
                    [svgIcon]="item.data.svgIcon"
                >
                </kendo-icon-wrapper>
                <span class="k-breadcrumb-item-text">{{ item.data.text }}</span>
            </span>
            <ng-template
                *ngIf="itemTemplate"
                [ngTemplateOutlet]="itemTemplate"
                [ngTemplateOutletContext]="{
                    $implicit: item.data,
                    index: index
                }"
            ></ng-template>
        </ng-container>

        <ng-container *ngIf="collapseMode !== 'wrap'">
            <ng-container *ngTemplateOutlet="separator"></ng-container>
        </ng-container>
    `,
      standalone: true,
      imports: [NgIf, NgTemplateOutlet, NgClass, IconWrapperComponent]
    }]
  }], () => [{
    type: ElementRef
  }], {
    item: [{
      type: Input
    }],
    collapseMode: [{
      type: Input
    }],
    index: [{
      type: Input
    }],
    itemTemplate: [{
      type: Input
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class.k-breadcrumb-item"]
    }],
    isRootItem: [{
      type: HostBinding,
      args: ["class.k-breadcrumb-root-item"]
    }],
    isDisabled: [{
      type: HostBinding,
      args: ["attr.aria-disabled"]
    }],
    isLastItem: [{
      type: HostBinding,
      args: ["class.k-breadcrumb-last-item"]
    }]
  });
})();
var DEFAULT_ICON = "chevron-right";
var DEFAULT_RTL_ICON = "chevron-left";
var DEFAULT_SVG_ICON = chevronRightIcon;
var DEFAULT_RTL_SVG_ICON = chevronLeftIcon;
var BreadCrumbSeparatorDirective = class _BreadCrumbSeparatorDirective {
  el;
  localization;
  set icon(icon) {
    if (isPresent2(icon)) {
      this._icon = icon;
      this.hasDefaultIcon = false;
    } else {
      this._icon = this.direction === "ltr" ? DEFAULT_ICON : DEFAULT_RTL_ICON;
      this.hasDefaultIcon = true;
    }
  }
  get icon() {
    return this._icon;
  }
  set svgIcon(svgIcon) {
    if (isPresent2(svgIcon)) {
      this._svgIcon = svgIcon;
      this.hasDefaultSvgIcon = false;
    } else {
      this._svgIcon = this.direction === "ltr" ? DEFAULT_SVG_ICON : DEFAULT_RTL_SVG_ICON;
      this.hasDefaultSvgIcon = true;
    }
  }
  get svgIcon() {
    return this._svgIcon;
  }
  ariaHidden = true;
  _icon;
  _svgIcon;
  hasDefaultIcon;
  hasDefaultSvgIcon;
  direction = "ltr";
  localizationChangesSubscription;
  constructor(el, localization) {
    this.el = el;
    this.localization = localization;
    this.direction = this.localization.rtl ? "rtl" : "ltr";
  }
  ngOnInit() {
    this.localizationChangesSubscription = this.localization.changes.subscribe(({
      rtl
    }) => {
      this.direction = rtl ? "rtl" : "ltr";
      if (this.hasDefaultIcon) {
        this.icon = void 0;
      }
      if (this.hasDefaultSvgIcon) {
        this.svgIcon = void 0;
      }
    });
  }
  ngOnDestroy() {
    this.localizationChangesSubscription.unsubscribe();
  }
  static ɵfac = function BreadCrumbSeparatorDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BreadCrumbSeparatorDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(LocalizationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _BreadCrumbSeparatorDirective,
    selectors: [["", "kendoBreadCrumbSeparator", ""]],
    hostVars: 1,
    hostBindings: function BreadCrumbSeparatorDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("aria-hidden", ctx.ariaHidden);
      }
    },
    inputs: {
      icon: "icon",
      svgIcon: "svgIcon"
    },
    attrs: _c14,
    decls: 1,
    vars: 2,
    consts: [["size", "xsmall", "innerCssClass", "k-breadcrumb-delimiter-icon", 3, "name", "svgIcon"]],
    template: function BreadCrumbSeparatorDirective_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelement(0, "kendo-icon-wrapper", 0);
      }
      if (rf & 2) {
        ɵɵproperty("name", ctx.icon)("svgIcon", ctx.svgIcon);
      }
    },
    dependencies: [IconWrapperComponent],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BreadCrumbSeparatorDirective, [{
    type: Component,
    args: [{
      selector: "[kendoBreadCrumbSeparator]",
      template: `
        <kendo-icon-wrapper
            size='xsmall'
            [name]="icon"
            [svgIcon]="svgIcon"
            innerCssClass="k-breadcrumb-delimiter-icon"
        >
        </kendo-icon-wrapper>
    `,
      standalone: true,
      imports: [IconWrapperComponent]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: LocalizationService
  }], {
    icon: [{
      type: Input
    }],
    svgIcon: [{
      type: Input
    }],
    ariaHidden: [{
      type: HostBinding,
      args: ["attr.aria-hidden"]
    }]
  });
})();
var BreadCrumbListComponent = class _BreadCrumbListComponent {
  el;
  zone;
  items = [];
  itemTemplate;
  collapseMode = "auto";
  separatorIcon;
  separatorSVGIcon;
  itemClick = new EventEmitter();
  renderedItems;
  isRootItemContainer;
  domEventsSubscription;
  constructor(el, zone) {
    this.el = el;
    this.zone = zone;
    const element = this.el.nativeElement;
    this.isRootItemContainer = element.classList.contains("k-breadcrumb-root-item-container");
    this.zone.runOutsideAngular(() => {
      const click$ = fromEvent(element, "click");
      const enterKey$ = fromEvent(element, "keydown").pipe(filter((ev) => ev.code === Keys.Enter || ev.code === Keys.NumpadEnter));
      this.domEventsSubscription = merge(click$, enterKey$).pipe(
        map((ev) => ev.target),
        filter((e) => !e.classList.contains("k-breadcrumb-delimiter-icon")),
        // do not trigger handler when a separator is clicked
        map((e) => this.getItemIndex(e)),
        filter(isPresent2),
        map((i) => parseInt(i, 10)),
        map((i) => this.items[i]),
        filter((item) => !item.data.disabled && !item.context.isLast),
        map((item) => item.data)
      ).subscribe((el2) => {
        this.zone.run(() => this.itemClick.emit(el2));
      });
    });
  }
  ngOnDestroy() {
    this.domEventsSubscription.unsubscribe();
  }
  getItemIndex(target) {
    const item = closestItem(target, BREADCRUMB_ITEM_INDEX, this.el.nativeElement);
    if (item) {
      return itemIndex(item, BREADCRUMB_ITEM_INDEX);
    }
  }
  static ɵfac = function BreadCrumbListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BreadCrumbListComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _BreadCrumbListComponent,
    selectors: [["", "kendoBreadCrumbList", ""]],
    viewQuery: function BreadCrumbListComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(BreadCrumbItemComponent, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.renderedItems = _t);
      }
    },
    inputs: {
      items: "items",
      itemTemplate: "itemTemplate",
      collapseMode: "collapseMode",
      separatorIcon: "separatorIcon",
      separatorSVGIcon: "separatorSVGIcon"
    },
    outputs: {
      itemClick: "itemClick"
    },
    attrs: _c15,
    decls: 1,
    vars: 1,
    consts: [["renderedItem", ""], [4, "ngFor", "ngForOf"], ["kendoBreadCrumbItem", "", 3, "item", "index", "collapseMode", "itemTemplate", 4, "ngIf"], ["kendoBreadCrumbItem", "", 3, "item", "index", "collapseMode", "itemTemplate"], ["kendoBreadCrumbSeparator", "", 3, "icon", "svgIcon", 4, "ngIf"], ["kendoBreadCrumbSeparator", "", 3, "icon", "svgIcon"]],
    template: function BreadCrumbListComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, BreadCrumbListComponent_ng_container_0_Template, 2, 1, "ng-container", 1);
      }
      if (rf & 2) {
        ɵɵproperty("ngForOf", ctx.items);
      }
    },
    dependencies: [NgForOf, NgIf, BreadCrumbItemComponent, BreadCrumbSeparatorDirective],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BreadCrumbListComponent, [{
    type: Component,
    args: [{
      // eslint-disable-next-line @angular-eslint/component-selector
      selector: "[kendoBreadCrumbList]",
      template: `
        <ng-container *ngFor="let item of items; let i = index; let isFirst = first; let isLast = last">
            <li
                #renderedItem
                kendoBreadCrumbItem
                *ngIf="!(collapseMode === 'wrap' && isFirst) || isRootItemContainer"
                [attr.${BREADCRUMB_ITEM_INDEX}]="i"
                [item]="item"
                [index]="i"
                [collapseMode]="collapseMode"
                [itemTemplate]="itemTemplate"
            >
                <span kendoBreadCrumbSeparator [icon]="separatorIcon" [svgIcon]="separatorSVGIcon" *ngIf="collapseMode === 'wrap' && !isFirst"></span>
                <span
                    kendoBreadCrumbSeparator
                    [icon]="separatorIcon"
                    [svgIcon]="separatorSVGIcon"
                    *ngIf="collapseMode !== 'wrap' && !isLast && !(item?.context.collapsed && items[i + 1]?.context.collapsed)"
                ></span>
            </li>
        </ng-container>
    `,
      standalone: true,
      imports: [NgForOf, NgIf, BreadCrumbItemComponent, BreadCrumbSeparatorDirective]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: NgZone
  }], {
    items: [{
      type: Input
    }],
    itemTemplate: [{
      type: Input
    }],
    collapseMode: [{
      type: Input
    }],
    separatorIcon: [{
      type: Input
    }],
    separatorSVGIcon: [{
      type: Input
    }],
    itemClick: [{
      type: Output
    }],
    renderedItems: [{
      type: ViewChildren,
      args: [BreadCrumbItemComponent]
    }]
  });
})();
var getCollapsed = (itemComponent) => itemComponent.item.context.collapsed;
var collapsed = (itemComponent) => getCollapsed(itemComponent) === true;
var expanded = (itemComponent) => getCollapsed(itemComponent) === false;
var toggleFirst = (collapsed2) => (itemComponents) => itemComponents.find((ic) => getCollapsed(ic) === collapsed2).item.context.collapsed = !collapsed2;
var collapseFirst = toggleFirst(false);
var expandFirst = toggleFirst(true);
var BreadCrumbComponent = class _BreadCrumbComponent {
  localization;
  el;
  cdr;
  zone;
  renderer;
  /**
   * Configures the collection of items that will be rendered in the Breadcrumb.
   */
  set items(items) {
    this._items = items || [];
    this.updateItems.next(this._items);
  }
  get items() {
    return this._items;
  }
  /**
   * Specifies the name of a [built-in font icon](slug:icon_list) in a Kendo UI theme to be rendered as a separator.
   */
  separatorIcon;
  /**
   * Defines an [`SVGIcon`](slug:api_icons_svgicon) to be rendered as a separator.
   */
  separatorSVGIcon;
  /**
   * Controls the collapse mode of the Breadcrumb.
   * For more information and example, refer to the [Collapse Modes]({% slug collapse_modes_breadcrumb %}) article.
   *
   * @default `auto`
   */
  set collapseMode(mode) {
    if (isDevMode() && ["auto", "wrap", "none"].indexOf(mode) < 0) {
      throw new Error('Invalid collapse mode. Allowed values are "auto", "wrap" or "none". \nFor more details see https://www.telerik.com/kendo-angular-ui/components/navigation/api/BreadCrumbCollapseMode/');
    }
    this._collapseMode = mode || "auto";
    this.updateItems.next(this.items);
  }
  get collapseMode() {
    return this._collapseMode;
  }
  /**
   * Determines the padding of all Breadcrumb elements.
   *
   * @default `medium`
   */
  set size(size) {
    const newSize = size ? size : DEFAULT_SIZE;
    this.handleClasses(newSize, "size");
    this._size = newSize;
  }
  get size() {
    return this._size;
  }
  /**
   * Fires when you click a Breadcrumb item. The event will not be fired by disabled items and the last item.
   */
  itemClick = new EventEmitter();
  /**
   * @hidden
   */
  resizeSensor;
  /**
   * @hidden
   */
  itemsContainers;
  /**
   * @hidden
   */
  listComponent;
  /**
   * @hidden
   */
  itemTemplate;
  hostClasses = true;
  get wrapMode() {
    return this.collapseMode === "wrap";
  }
  hostAriaLabel = "Breadcrumb";
  get getDir() {
    return this.direction;
  }
  itemsData$;
  firstItem$;
  _items = [];
  _collapseMode = "auto";
  _size = DEFAULT_SIZE;
  updateItems = new ReplaySubject();
  afterViewInit = new Subject();
  subscriptions = new Subscription();
  direction = "ltr";
  constructor(localization, el, cdr, zone, renderer) {
    this.localization = localization;
    this.el = el;
    this.cdr = cdr;
    this.zone = zone;
    this.renderer = renderer;
    validatePackage(packageMetadata);
    const updateItems$ = this.updateItems.asObservable().pipe(startWith([]));
    this.direction = localization.rtl ? "rtl" : "ltr";
    this.itemsData$ = updateItems$.pipe(map((items) => items.filter(Boolean)), map((items) => items.map((item, index, collection) => ({
      context: {
        collapsed: false,
        isLast: index === collection.length - 1,
        isFirst: index === 0
      },
      data: item
    }))), share());
    this.firstItem$ = updateItems$.pipe(map((items) => {
      if (items.length > 0) {
        return [{
          context: {
            collapsed: false,
            isLast: items.length === 1,
            isFirst: true
          },
          data: items[0]
        }];
      }
      return [];
    }), share());
  }
  ngOnInit() {
    this.subscriptions.add(this.localization.changes.subscribe(({
      rtl
    }) => this.direction = rtl ? "rtl" : "ltr"));
    this.handleClasses(this.size, "size");
  }
  ngAfterViewInit() {
    this.attachResizeHandler();
    this.afterViewInit.next(void 0);
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  handleResize() {
    const autoCollapseCandidates = [...this.listComponent.renderedItems.toArray().filter((ri) => !ri.item.context.isFirst && !ri.item.context.isLast)];
    const componentWidth = Math.floor(outerWidth(this.el.nativeElement));
    const itemsContainerWidth = Math.round(this.itemsContainers.toArray().map((el) => outerWidth(el.nativeElement)).reduce((acc, curr) => acc + curr, 0));
    const nextExpandWidth = Math.ceil(([...autoCollapseCandidates].reverse().find(collapsed) || {
      width: 0
    }).width);
    if (componentWidth <= itemsContainerWidth && autoCollapseCandidates.find(expanded)) {
      collapseFirst(autoCollapseCandidates);
      this.cdr.detectChanges();
      return this.handleResize();
    }
    if (componentWidth > itemsContainerWidth + nextExpandWidth && autoCollapseCandidates.find(collapsed)) {
      expandFirst([...autoCollapseCandidates].reverse());
      this.cdr.detectChanges();
      return this.handleResize();
    }
  }
  shouldResize() {
    return isDocumentAvailable() && this.collapseMode === "auto";
  }
  attachResizeHandler() {
    this.subscriptions.add(merge(this.resizeSensor.resize, this.itemsData$, this.afterViewInit.asObservable()).pipe(filter(() => this.shouldResize())).subscribe(() => {
      this.resizeHandler();
    }));
  }
  handleClasses(value, input) {
    const elem = this.el.nativeElement;
    const classes = getStylingClasses(input, this[input], value);
    if (classes.toRemove) {
      this.renderer.removeClass(elem, classes.toRemove);
    }
    if (classes.toAdd) {
      this.renderer.addClass(elem, classes.toAdd);
    }
  }
  resizeHandler = () => {
    this.zone.runOutsideAngular(() => setTimeout(() => {
      this.zone.run(() => {
        if (this.listComponent) {
          this.handleResize();
          this.resizeSensor.acceptSize();
        }
      });
    }));
  };
  static ɵfac = function BreadCrumbComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BreadCrumbComponent)(ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Renderer2));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _BreadCrumbComponent,
    selectors: [["kendo-breadcrumb"]],
    contentQueries: function BreadCrumbComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, BreadCrumbItemTemplateDirective, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.itemTemplate = _t.first);
      }
    },
    viewQuery: function BreadCrumbComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c16, 7);
        ɵɵviewQuery(BreadCrumbListComponent, 7);
        ɵɵviewQuery(_c17, 5, ElementRef);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.resizeSensor = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.listComponent = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.itemsContainers = _t);
      }
    },
    hostVars: 6,
    hostBindings: function BreadCrumbComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("aria-label", ctx.hostAriaLabel)("dir", ctx.getDir);
        ɵɵclassProp("k-breadcrumb", ctx.hostClasses)("k-breadcrumb-wrap", ctx.wrapMode);
      }
    },
    inputs: {
      items: "items",
      separatorIcon: "separatorIcon",
      separatorSVGIcon: "separatorSVGIcon",
      collapseMode: "collapseMode",
      size: "size"
    },
    outputs: {
      itemClick: "itemClick"
    },
    exportAs: ["kendoBreadCrumb"],
    features: [ɵɵProvidersFeature([LocalizationService, {
      provide: L10N_PREFIX,
      useValue: "kendo.breadcrumb"
    }])],
    decls: 6,
    vars: 13,
    consts: [["itemsContainer", ""], ["resizeSensor", ""], ["kendoBreadCrumbList", "", "class", "k-breadcrumb-root-item-container", 3, "items", "itemTemplate", "collapseMode", "separatorIcon", "separatorSVGIcon", "itemClick", 4, "ngIf"], ["kendoBreadCrumbList", "", 1, "k-breadcrumb-container", 3, "itemClick", "items", "itemTemplate", "collapseMode", "separatorIcon", "separatorSVGIcon", "ngClass"], [3, "rateLimit"], ["kendoBreadCrumbList", "", 1, "k-breadcrumb-root-item-container", 3, "itemClick", "items", "itemTemplate", "collapseMode", "separatorIcon", "separatorSVGIcon"]],
    template: function BreadCrumbComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵtemplate(0, BreadCrumbComponent_ol_0_Template, 3, 7, "ol", 2);
        ɵɵelementStart(1, "ol", 3, 0);
        ɵɵpipe(3, "async");
        ɵɵlistener("itemClick", function BreadCrumbComponent_Template_ol_itemClick_1_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.itemClick.emit($event));
        });
        ɵɵelementEnd();
        ɵɵelement(4, "kendo-resize-sensor", 4, 1);
      }
      if (rf & 2) {
        ɵɵproperty("ngIf", ctx.collapseMode === "wrap");
        ɵɵadvance();
        ɵɵproperty("items", ɵɵpipeBind1(3, 8, ctx.itemsData$))("itemTemplate", ctx.itemTemplate == null ? null : ctx.itemTemplate.templateRef)("collapseMode", ctx.collapseMode)("separatorIcon", ctx.separatorIcon)("separatorSVGIcon", ctx.separatorSVGIcon)("ngClass", ɵɵpureFunction2(10, _c18, ctx.collapseMode === "wrap", ctx.collapseMode === "none"));
        ɵɵadvance(3);
        ɵɵproperty("rateLimit", 1e3);
      }
    },
    dependencies: [NgIf, BreadCrumbListComponent, NgClass, ResizeSensorComponent, AsyncPipe],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BreadCrumbComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoBreadCrumb",
      selector: "kendo-breadcrumb",
      providers: [LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.breadcrumb"
      }],
      template: `
        <ol
            #itemsContainer
            kendoBreadCrumbList
            class="k-breadcrumb-root-item-container"
            *ngIf="collapseMode === 'wrap'"
            [items]="firstItem$ | async"
            [itemTemplate]="itemTemplate?.templateRef"
            [collapseMode]="collapseMode"
            [separatorIcon]="separatorIcon"
            [separatorSVGIcon]="separatorSVGIcon"
            (itemClick)="itemClick.emit($event)"
        ></ol>
        <ol
            #itemsContainer
            kendoBreadCrumbList
            class="k-breadcrumb-container"
            [items]="itemsData$ | async"
            [itemTemplate]="itemTemplate?.templateRef"
            [collapseMode]="collapseMode"
            [separatorIcon]="separatorIcon"
            [separatorSVGIcon]="separatorSVGIcon"
            (itemClick)="itemClick.emit($event)"
            [ngClass]="{ '!k-flex-wrap': collapseMode === 'wrap', 'k-flex-none': collapseMode === 'none' }"
        ></ol>
        <kendo-resize-sensor [rateLimit]="1000" #resizeSensor></kendo-resize-sensor>
    `,
      standalone: true,
      imports: [NgIf, BreadCrumbListComponent, NgClass, ResizeSensorComponent, AsyncPipe]
    }]
  }], () => [{
    type: LocalizationService
  }, {
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }, {
    type: NgZone
  }, {
    type: Renderer2
  }], {
    items: [{
      type: Input
    }],
    separatorIcon: [{
      type: Input
    }],
    separatorSVGIcon: [{
      type: Input
    }],
    collapseMode: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    itemClick: [{
      type: Output
    }],
    resizeSensor: [{
      type: ViewChild,
      args: ["resizeSensor", {
        static: true
      }]
    }],
    itemsContainers: [{
      type: ViewChildren,
      args: ["itemsContainer", {
        read: ElementRef
      }]
    }],
    listComponent: [{
      type: ViewChild,
      args: [BreadCrumbListComponent, {
        static: true
      }]
    }],
    itemTemplate: [{
      type: ContentChild,
      args: [BreadCrumbItemTemplateDirective]
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class.k-breadcrumb"]
    }],
    wrapMode: [{
      type: HostBinding,
      args: ["class.k-breadcrumb-wrap"]
    }],
    hostAriaLabel: [{
      type: HostBinding,
      args: ["attr.aria-label"]
    }],
    getDir: [{
      type: HostBinding,
      args: ["attr.dir"]
    }]
  });
})();
var KENDO_ACTIONSHEET = [ActionSheetComponent, ActionSheetViewComponent, ActionSheetHeaderTemplateDirective, ActionSheetItemTemplateDirective, ActionSheetContentTemplateDirective, ActionSheetFooterTemplateDirective, ActionSheetTemplateDirective];
var KENDO_APPBAR = [AppBarComponent, AppBarSectionComponent, AppBarSpacerComponent];
var KENDO_BOTTOMNAVIGATION = [BottomNavigationComponent, BottomNavigationItemTemplateDirective];
var KENDO_BREADCRUMB = [BreadCrumbComponent, BreadCrumbItemTemplateDirective];
var KENDO_NAVIGATION = [...KENDO_ACTIONSHEET, ...KENDO_APPBAR, ...KENDO_BOTTOMNAVIGATION, ...KENDO_BREADCRUMB];
var AppBarModule = class _AppBarModule {
  static ɵfac = function AppBarModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppBarModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _AppBarModule,
    imports: [AppBarComponent, AppBarSectionComponent, AppBarSpacerComponent],
    exports: [AppBarComponent, AppBarSectionComponent, AppBarSpacerComponent]
  });
  static ɵinj = ɵɵdefineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppBarModule, [{
    type: NgModule,
    args: [{
      exports: [...KENDO_APPBAR],
      imports: [...KENDO_APPBAR]
    }]
  }], null, null);
})();
var NavigationModule = class _NavigationModule {
  static ɵfac = function NavigationModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NavigationModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _NavigationModule,
    imports: [ActionSheetComponent, ActionSheetViewComponent, ActionSheetHeaderTemplateDirective, ActionSheetItemTemplateDirective, ActionSheetContentTemplateDirective, ActionSheetFooterTemplateDirective, ActionSheetTemplateDirective, AppBarComponent, AppBarSectionComponent, AppBarSpacerComponent, BottomNavigationComponent, BottomNavigationItemTemplateDirective, BreadCrumbComponent, BreadCrumbItemTemplateDirective],
    exports: [ActionSheetComponent, ActionSheetViewComponent, ActionSheetHeaderTemplateDirective, ActionSheetItemTemplateDirective, ActionSheetContentTemplateDirective, ActionSheetFooterTemplateDirective, ActionSheetTemplateDirective, AppBarComponent, AppBarSectionComponent, AppBarSpacerComponent, BottomNavigationComponent, BottomNavigationItemTemplateDirective, BreadCrumbComponent, BreadCrumbItemTemplateDirective]
  });
  static ɵinj = ɵɵdefineInjector({
    providers: [IconsService, ResizeBatchService],
    imports: [ActionSheetComponent, BottomNavigationComponent, BreadCrumbComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavigationModule, [{
    type: NgModule,
    args: [{
      imports: [...KENDO_NAVIGATION],
      exports: [...KENDO_NAVIGATION],
      providers: [IconsService, ResizeBatchService]
    }]
  }], null, null);
})();
var BreadCrumbModule = class _BreadCrumbModule {
  static ɵfac = function BreadCrumbModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BreadCrumbModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _BreadCrumbModule,
    imports: [BreadCrumbComponent, BreadCrumbItemTemplateDirective],
    exports: [BreadCrumbComponent, BreadCrumbItemTemplateDirective]
  });
  static ɵinj = ɵɵdefineInjector({
    providers: [IconsService, ResizeBatchService],
    imports: [BreadCrumbComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BreadCrumbModule, [{
    type: NgModule,
    args: [{
      exports: [...KENDO_BREADCRUMB],
      imports: [...KENDO_BREADCRUMB],
      providers: [IconsService, ResizeBatchService]
    }]
  }], null, null);
})();
var BottomNavigationModule = class _BottomNavigationModule {
  static ɵfac = function BottomNavigationModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BottomNavigationModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _BottomNavigationModule,
    imports: [BottomNavigationComponent, BottomNavigationItemTemplateDirective],
    exports: [BottomNavigationComponent, BottomNavigationItemTemplateDirective]
  });
  static ɵinj = ɵɵdefineInjector({
    providers: [IconsService],
    imports: [BottomNavigationComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BottomNavigationModule, [{
    type: NgModule,
    args: [{
      exports: [...KENDO_BOTTOMNAVIGATION],
      imports: [...KENDO_BOTTOMNAVIGATION],
      providers: [IconsService]
    }]
  }], null, null);
})();
var ActionSheetModule = class _ActionSheetModule {
  static ɵfac = function ActionSheetModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ActionSheetModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _ActionSheetModule,
    imports: [ActionSheetComponent, ActionSheetViewComponent, ActionSheetHeaderTemplateDirective, ActionSheetItemTemplateDirective, ActionSheetContentTemplateDirective, ActionSheetFooterTemplateDirective, ActionSheetTemplateDirective],
    exports: [ActionSheetComponent, ActionSheetViewComponent, ActionSheetHeaderTemplateDirective, ActionSheetItemTemplateDirective, ActionSheetContentTemplateDirective, ActionSheetFooterTemplateDirective, ActionSheetTemplateDirective]
  });
  static ɵinj = ɵɵdefineInjector({
    providers: [IconsService],
    imports: [ActionSheetComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ActionSheetModule, [{
    type: NgModule,
    args: [{
      exports: [...KENDO_ACTIONSHEET],
      imports: [...KENDO_ACTIONSHEET],
      providers: [IconsService]
    }]
  }], null, null);
})();

// node_modules/@progress/kendo-draggable-common/dist/es/algorithms/intersect.js
var getRatio = function(element, target) {
  var elementRect = element.getBoundingClientRect();
  var targetRect = target.getBoundingClientRect();
  var top = Math.max(targetRect.top, elementRect.top);
  var left = Math.max(targetRect.left, elementRect.left);
  var right = Math.min(targetRect.left + targetRect.width, elementRect.left + elementRect.width);
  var bottom = Math.min(targetRect.top + targetRect.height, elementRect.top + elementRect.height);
  var width = right - left;
  var height = bottom - top;
  if (left < right && top < bottom) {
    var targetArea = targetRect.width * targetRect.height;
    var entryArea = elementRect.width * elementRect.height;
    var intersectionArea = width * height;
    var intersectionRatio = intersectionArea / (targetArea + entryArea - intersectionArea);
    return Number(intersectionRatio.toFixed(4));
  }
  return 0;
};
var intersect = function(element, candidates) {
  var max = 0;
  var result = null;
  candidates.forEach(function(candidate) {
    if (candidate && element) {
      var ration = getRatio(element, candidate);
      if (ration > max) {
        max = ration;
        result = candidate;
      }
    }
  });
  return result;
};

// node_modules/@progress/kendo-draggable-common/dist/es/utils/index.js
var detectBrowser = function() {
  var ua = window && window.navigator.userAgent;
  if (!ua) {
    return false;
  }
  var browser = false;
  var match = [];
  var browserRxs = {
    edge: /(edge)[ \/]([\w.]+)/i,
    webkit: /(chrome|crios)[ \/]([\w.]+)/i,
    safari: /(webkit)[ \/]([\w.]+)/i,
    opera: /(opera)(?:.*version|)[ \/]([\w.]+)/i,
    msie: /(msie\s|trident.*? rv:)([\w.]+)/i,
    mozilla: /(mozilla)(?:.*? rv:([\w.]+)|)/i
  };
  for (var agent in browserRxs) {
    if (browserRxs.hasOwnProperty(agent)) {
      match = ua.match(browserRxs[agent]);
      if (match) {
        browser = {};
        browser[agent] = true;
        browser[match[1].toLowerCase().split(" ")[0].split("/")[0]] = true;
        browser.version = parseInt(document.DOCUMENT_NODE || match[2], 10);
        break;
      }
    }
  }
  return browser;
};
var getDocument = function(element) {
  return element ? element.ownerDocument || window.document : window.document;
};
var getWindow = function(element) {
  var document2 = getDocument(element);
  return document2 ? document2.defaultView || window : window;
};
var scrollableRoot = function(element) {
  var support = { browser: detectBrowser() };
  var document2 = getDocument(element);
  return support.browser.edge || support.browser.safari ? document2.body : document2.documentElement;
};
var isScrollable = function(el) {
  if (el && el.className && typeof el.className === "string" && el.className.indexOf("k-auto-scrollable") > -1) {
    return true;
  }
  var overflow = window.getComputedStyle(el, "overflow").overflow;
  return overflow.indexOf("auto") > -1 || overflow.indexOf("scroll") > -1;
};
var getScrollableParent = function(el) {
  var root = scrollableRoot(el);
  if (!el || el === document.body || el === document.documentElement) {
    return root;
  }
  var parent = el;
  while (parent && parent !== document.body && parent.nodeType !== Node.DOCUMENT_FRAGMENT_NODE && parent.nodeType !== Node.DOCUMENT_NODE && !isScrollable(parent)) {
    parent = parent.parentNode;
  }
  if (parent && (parent === document.body || parent.nodeType === Node.DOCUMENT_FRAGMENT_NODE)) {
    return root;
  }
  return parent;
};
var autoScrollVelocity = function(mouseX, mouseY, rect) {
  var velocity = { x: 0, y: 0 };
  var AUTO_SCROLL_AREA = 50;
  if (mouseX - rect.left < AUTO_SCROLL_AREA) {
    velocity.x = -(AUTO_SCROLL_AREA - (mouseX - rect.left));
  } else if (rect.right - mouseX < AUTO_SCROLL_AREA) {
    velocity.x = AUTO_SCROLL_AREA - (rect.right - mouseX);
  }
  if (mouseY - rect.top < AUTO_SCROLL_AREA) {
    velocity.y = -(AUTO_SCROLL_AREA - (mouseY - rect.top));
  } else if (rect.bottom - mouseY < AUTO_SCROLL_AREA) {
    velocity.y = AUTO_SCROLL_AREA - (rect.bottom - mouseY);
  }
  return velocity;
};
var scrollableViewPort = function(el, window2) {
  var root = scrollableRoot(el);
  if (el === root) {
    return {
      top: root.scrollTop,
      left: root.scrollLeft,
      bottom: root.scrollTop + window2.innerHeight,
      right: root.scrollLeft + window2.innerWidth
    };
  } else {
    var rect = el.getBoundingClientRect();
    return {
      bottom: rect.top + rect.height,
      right: rect.left + rect.width,
      left: rect.left,
      top: rect.top
    };
  }
};
var isPointerInsideContainer = function(x, y, container) {
  var rect = container.getBoundingClientRect();
  return rect.top <= y && rect.left <= x && y <= rect.bottom && x <= rect.right;
};

// node_modules/@progress/kendo-draggable-common/dist/es/drag-n-drop.js
var DRAG_AND_DROP_DISPATCH_ACTION;
(function(DRAG_AND_DROP_DISPATCH_ACTION2) {
  DRAG_AND_DROP_DISPATCH_ACTION2["POINTER_DOWN"] = "pointerdown";
  DRAG_AND_DROP_DISPATCH_ACTION2["POINTER_MOVE"] = "pointermove";
  DRAG_AND_DROP_DISPATCH_ACTION2["POINTER_UP"] = "pointerup";
  DRAG_AND_DROP_DISPATCH_ACTION2["POINTER_CANCEL"] = "pointercancel";
  DRAG_AND_DROP_DISPATCH_ACTION2["MOUSE_DOWN"] = "mousedown";
  DRAG_AND_DROP_DISPATCH_ACTION2["MOUSE_MOVE"] = "mousemove";
  DRAG_AND_DROP_DISPATCH_ACTION2["MOUSE_UP"] = "mouseup";
  DRAG_AND_DROP_DISPATCH_ACTION2["CONTEXT_MENU"] = "contextmenu";
  DRAG_AND_DROP_DISPATCH_ACTION2["TOUCH_START"] = "touchstart";
  DRAG_AND_DROP_DISPATCH_ACTION2["TOUCH_MOVE"] = "touchmove";
  DRAG_AND_DROP_DISPATCH_ACTION2["TOUCH_END"] = "touchend";
  DRAG_AND_DROP_DISPATCH_ACTION2["TOUCH_CANCEL"] = "touchcancel";
  DRAG_AND_DROP_DISPATCH_ACTION2["SCROLL"] = "scroll";
  DRAG_AND_DROP_DISPATCH_ACTION2["START"] = "KENDO_DRAG_AND_DROP_START";
  DRAG_AND_DROP_DISPATCH_ACTION2["MOVE"] = "KENDO_DRAG_AND_DROP_MOVE";
  DRAG_AND_DROP_DISPATCH_ACTION2["END"] = "KENDO_DRAG_AND_DROP_END";
  DRAG_AND_DROP_DISPATCH_ACTION2["CANCEL"] = "KENDO_DRAG_AND_DROP_CANCEL";
})(DRAG_AND_DROP_DISPATCH_ACTION || (DRAG_AND_DROP_DISPATCH_ACTION = {}));
var isTouchEvent = function(event) {
  return /^touch/.test(event.type);
};
var isScrollEvent = function(event) {
  return /^(scroll)/.test(event.type);
};
var normalizeEvent = function(event, state) {
  return isTouchEvent(event) ? {
    pageX: event.changedTouches[0].pageX,
    pageY: event.changedTouches[0].pageY,
    clientX: event.changedTouches[0].clientX,
    clientY: event.changedTouches[0].clientY,
    scrollX: state.scrollOffset.x,
    scrollY: state.scrollOffset.y,
    offsetX: state.offset.x,
    offsetY: state.offset.y,
    type: event.type,
    originalEvent: event,
    isTouch: true,
    altKey: false,
    ctrlKey: false,
    shiftKey: false,
    metaKey: false
  } : isScrollEvent(event) ? {
    pageX: state.pageOffset.x,
    pageY: state.pageOffset.y,
    clientX: state.clientOffset.x,
    clientY: state.clientOffset.y,
    scrollX: state.scrollOffset.x,
    scrollY: state.scrollOffset.y,
    offsetX: state.offset.x,
    offsetY: state.offset.y,
    type: event.type,
    originalEvent: event,
    altKey: false,
    ctrlKey: false,
    shiftKey: false,
    metaKey: false
  } : {
    pageX: event.pageX,
    pageY: event.pageY,
    clientX: event.clientX,
    clientY: event.clientY,
    offsetX: event.offsetX,
    offsetY: event.offsetY,
    scrollX: state.scrollOffset.x,
    scrollY: state.scrollOffset.y,
    type: event.type,
    ctrlKey: event.ctrlKey,
    shiftKey: event.shiftKey,
    altKey: event.altKey,
    metaKey: event.metaKey,
    originalEvent: event
  };
};
var noop = function() {
};
var dispatchDragAndDrop = function(state, action, callbacks) {
  if (callbacks === void 0) {
    callbacks = {};
  }
  var _a = callbacks.onIsPressedChange, onIsPressedChange = _a === void 0 ? noop : _a, _b = callbacks.onIsScrollingChange, onIsScrollingChange = _b === void 0 ? noop : _b, _c = callbacks.onVelocityChange, onVelocityChange = _c === void 0 ? noop : _c, _d = callbacks.onOffsetChange, onOffsetChange = _d === void 0 ? noop : _d, _e = callbacks.onPageOffsetChange, onPageOffsetChange = _e === void 0 ? noop : _e, _f = callbacks.onClientOffsetChange, onClientOffsetChange = _f === void 0 ? noop : _f, _g = callbacks.onScrollOffsetChange, onScrollOffsetChange = _g === void 0 ? noop : _g, _h = callbacks.onInitialScrollOffsetChange, onInitialScrollOffsetChange = _h === void 0 ? noop : _h;
  var drag = action.payload;
  var element = drag.element;
  var hint = drag.hint;
  var autoScrollDirection = state.autoScrollDirection;
  var overrideScrollableParent = state.scrollableParent;
  var event = normalizeEvent(action.event, state);
  switch (event.type) {
    case DRAG_AND_DROP_DISPATCH_ACTION.POINTER_DOWN:
      if (event.type === DRAG_AND_DROP_DISPATCH_ACTION.POINTER_DOWN && (!event.originalEvent.isPrimary || event.originalEvent.button !== 0)) {
        break;
      }
    // In rare cases where the `which` attribute is available in the mouse event
    // we check if the `left button` is explicitly clicked:
    // https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/which#return_value
    case DRAG_AND_DROP_DISPATCH_ACTION.MOUSE_DOWN:
      if (event.type === DRAG_AND_DROP_DISPATCH_ACTION.MOUSE_DOWN && (event.originalEvent.which && event.originalEvent.which > 1) || state.ignoreMouse) {
        break;
      }
    case DRAG_AND_DROP_DISPATCH_ACTION.TOUCH_START:
      if (event.type === DRAG_AND_DROP_DISPATCH_ACTION.TOUCH_START && event.originalEvent.touches.length !== 1) {
        break;
      }
    case DRAG_AND_DROP_DISPATCH_ACTION.START: {
      var scrollableParent_1 = overrideScrollableParent || getScrollableParent(action.payload.element);
      onInitialScrollOffsetChange(scrollableParent_1 instanceof Window ? { x: scrollableParent_1.scrollX, y: scrollableParent_1.scrollY } : { x: scrollableParent_1.scrollLeft, y: scrollableParent_1.scrollTop });
      onClientOffsetChange({
        x: event.clientX,
        y: event.clientY
      });
      onPageOffsetChange({
        x: event.pageX,
        y: event.pageY
      });
      onOffsetChange({
        x: event.offsetX,
        y: event.offsetY
      });
      onIsPressedChange(true);
      if (drag.onPress) {
        drag.onPress(event);
      }
      break;
    }
    case DRAG_AND_DROP_DISPATCH_ACTION.SCROLL:
      if (event.type === DRAG_AND_DROP_DISPATCH_ACTION.SCROLL && !state.pressed) {
        break;
      }
      var scrollableParent = overrideScrollableParent || getScrollableParent(element);
      var scrollOffset = scrollableParent instanceof Window ? { x: scrollableParent.scrollX, y: scrollableParent.scrollY } : { x: scrollableParent.scrollLeft, y: scrollableParent.scrollTop };
      event.scrollX = scrollOffset.x - state.initialScrollOffset.x;
      event.scrollY = scrollOffset.y - state.initialScrollOffset.y;
      onScrollOffsetChange({
        x: event.scrollX,
        y: event.scrollY
      });
    case DRAG_AND_DROP_DISPATCH_ACTION.POINTER_MOVE:
      if (event.type === DRAG_AND_DROP_DISPATCH_ACTION.POINTER_MOVE && !event.originalEvent.isPrimary) {
        break;
      }
    case DRAG_AND_DROP_DISPATCH_ACTION.MOUSE_MOVE:
    case DRAG_AND_DROP_DISPATCH_ACTION.TOUCH_MOVE:
      if (event.type === DRAG_AND_DROP_DISPATCH_ACTION.TOUCH_MOVE && event.originalEvent.touches.length !== 1) {
        break;
      }
    case DRAG_AND_DROP_DISPATCH_ACTION.MOVE: {
      if (state.pressed) {
        if (state.autoScroll && event.originalEvent.type !== "scroll") {
          if (element) {
            var document_1 = getDocument(element);
            var scrollableParent_2 = overrideScrollableParent || getScrollableParent(document_1.elementFromPoint(event.clientX, event.clientY));
            var newVelocity = autoScrollVelocity(event.clientX, event.clientY, scrollableViewPort(scrollableParent_2, getWindow(element)));
            onVelocityChange({
              x: autoScrollDirection && autoScrollDirection.horizontal === false ? 0 : newVelocity.x,
              y: autoScrollDirection && autoScrollDirection.vertical === false ? 0 : newVelocity.y
            });
            onIsScrollingChange(newVelocity.y !== 0 || newVelocity.x !== 0);
          }
        }
        if (!state.drag && drag.onDragStart) {
          drag.onDragStart(event);
        }
        if (drag.onDrag) {
          drag.onDrag(event);
        }
        var dropElement_1 = intersect(hint || element, state.drops.map(function(drop2) {
          return drop2 && drop2.element;
        }).filter(function(d) {
          return d !== (hint || element);
        }));
        var drop = state.drops.find(function(drop2) {
          return drop2.element === dropElement_1;
        });
        if (drop && dropElement_1 && isPointerInsideContainer(event.clientX, event.clientY, overrideScrollableParent || getScrollableParent(dropElement_1)) && dropElement_1 !== element) {
          if ((state.drop && state.drop.element) !== dropElement_1) {
            if (state.drop && state.drop.onDragLeave) {
              state.drop.onDragLeave(event);
            }
            if (drop.onDragEnter) {
              drop.onDragEnter(event);
            }
          } else {
            if (drop.onDragOver) {
              drop.onDragOver(event);
            }
          }
        } else if (state.drop && state.drop.onDragLeave) {
          state.drop.onDragLeave(event);
        }
      }
      onClientOffsetChange({
        x: event.clientX,
        y: event.clientY
      });
      onPageOffsetChange({
        x: event.pageX,
        y: event.pageY
      });
      break;
    }
    case DRAG_AND_DROP_DISPATCH_ACTION.POINTER_UP:
      if (event.type === DRAG_AND_DROP_DISPATCH_ACTION.POINTER_UP && !event.originalEvent.isPrimary) {
        break;
      }
    case DRAG_AND_DROP_DISPATCH_ACTION.MOUSE_UP:
    // the last finger has been lifted, and the user is not doing gesture.
    // there might be a better way to handle this.
    case DRAG_AND_DROP_DISPATCH_ACTION.TOUCH_END:
      if (event.type === DRAG_AND_DROP_DISPATCH_ACTION.TOUCH_END && event.originalEvent.touches.length !== 1) {
        break;
      }
    case DRAG_AND_DROP_DISPATCH_ACTION.END: {
      onIsPressedChange(false);
      onIsScrollingChange(false);
      onScrollOffsetChange({ x: 0, y: 0 });
      if (drag.onRelease) {
        drag.onRelease(event);
      }
      if (state.drop && state.drop.onDrop) {
        state.drop.onDrop(event);
      }
      if (state.drag && drag.onDragEnd) {
        drag.onDragEnd(event);
      }
      break;
    }
    case DRAG_AND_DROP_DISPATCH_ACTION.POINTER_CANCEL:
    case DRAG_AND_DROP_DISPATCH_ACTION.CONTEXT_MENU:
    case DRAG_AND_DROP_DISPATCH_ACTION.TOUCH_CANCEL:
    case DRAG_AND_DROP_DISPATCH_ACTION.CANCEL: {
      onIsPressedChange(false);
      onIsScrollingChange(false);
      onScrollOffsetChange({ x: 0, y: 0 });
      if (drag.onDragEnd) {
        drag.onDragEnd(event);
      }
      if (state.drop && state.drop.onDragLeave) {
        state.drop.onDragLeave(event);
      }
      break;
    }
    default:
      break;
  }
};

// node_modules/@progress/kendo-draggable-common/dist/es/auto-scroll.js
var autoScroll = function(scrollableParent, vel) {
  if (!scrollableParent) {
    return;
  }
  var yIsScrollable;
  var xIsScrollable;
  var isRootNode = scrollableParent === scrollableRoot(scrollableParent);
  if (isRootNode) {
    yIsScrollable = document.body.scrollHeight > window.innerHeight;
    xIsScrollable = document.body.scrollWidth > window.innerWidth;
  } else {
    yIsScrollable = scrollableParent.offsetHeight <= scrollableParent.scrollHeight;
    xIsScrollable = scrollableParent.offsetWidth <= scrollableParent.scrollWidth;
  }
  var yDelta = scrollableParent.scrollTop + vel.y;
  var yInBounds = yIsScrollable && yDelta > 0 && yDelta < scrollableParent.scrollHeight;
  var xDelta = scrollableParent.scrollLeft + vel.x;
  var xInBounds = xIsScrollable && xDelta > 0 && xDelta < scrollableParent.scrollWidth;
  if (yInBounds) {
    scrollableParent.scrollTop += vel.y;
  } else if (yIsScrollable && yDelta < 0) {
    scrollableParent.scrollTop = 0;
  }
  if (xInBounds) {
    scrollableParent.scrollLeft += vel.x;
  } else if (xIsScrollable && xDelta < 0) {
    scrollableParent.scrollLeft = 0;
  }
};

// node_modules/@progress/kendo-angular-utils/fesm2022/progress-kendo-angular-utils.mjs
var _c02 = (a0, a1, a2) => ({
  $implicit: a0,
  index: a1,
  data: a2
});
var DragHandleDirective = class _DragHandleDirective {
  element;
  touchActionStyle = "none";
  /**
   * Sets the cursor style of the drag handle. Accepts same values as the [CSS `cursor` property](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor#values).
   *
   * @default 'move'
   */
  cursorStyle = "move";
  constructor(element) {
    this.element = element;
  }
  static ɵfac = function DragHandleDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DragHandleDirective)(ɵɵdirectiveInject(ElementRef));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _DragHandleDirective,
    selectors: [["", "kendoDragHandle", ""]],
    hostVars: 4,
    hostBindings: function DragHandleDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵstyleProp("touch-action", ctx.touchActionStyle)("cursor", ctx.cursorStyle);
      }
    },
    inputs: {
      cursorStyle: "cursorStyle"
    },
    exportAs: ["kendoDragHandle"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DragHandleDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoDragHandle]",
      exportAs: "kendoDragHandle",
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }], {
    touchActionStyle: [{
      type: HostBinding,
      args: ["style.touch-action"]
    }],
    cursorStyle: [{
      type: HostBinding,
      args: ["style.cursor"]
    }, {
      type: Input
    }]
  });
})();
var packageMetadata2 = {
  name: "@progress/kendo-angular-utils",
  productName: "Kendo UI for Angular",
  productCode: "KENDOUIANGULAR",
  productCodes: ["KENDOUIANGULAR"],
  publishDate: 1763638748,
  version: "21.1.0",
  licensingDocsUrl: "https://www.telerik.com/kendo-angular-ui/my-license/"
};
function isDocumentNode(container) {
  return container.nodeType === 9;
}
var getAction = (event, draggable) => {
  return {
    event,
    payload: draggable
  };
};
var dragTargetTransition = "transform .3s ease-in-out";
var isPresent3 = (value) => value !== null && value !== void 0;
function closestBySelector(element, selector) {
  if (element.closest) {
    return element.closest(selector);
  }
  const matches = Element.prototype.matches ? (el, sel) => el.matches(sel) : (el, sel) => el.msMatchesSelector(sel);
  let node = element;
  while (node && !isDocumentNode(node)) {
    if (matches(node, selector)) {
      return node;
    }
    node = node.parentNode;
  }
}
var intersect2 = (element, candidates) => {
  let max = 0;
  let result = null;
  candidates.forEach((candidate) => {
    if (candidate && element) {
      const ration = getRatio2(element, candidate);
      if (ration > max) {
        max = ration;
        result = candidate;
      }
    }
  });
  return result;
};
var getRatio2 = (element, target) => {
  const elementRect = element.getBoundingClientRect();
  const targetRect = target.getBoundingClientRect();
  const top = Math.max(targetRect.top, elementRect.top);
  const left = Math.max(targetRect.left, elementRect.left);
  const right = Math.min(targetRect.left + targetRect.width, elementRect.left + elementRect.width);
  const bottom = Math.min(targetRect.top + targetRect.height, elementRect.top + elementRect.height);
  const width = right - left;
  const height = bottom - top;
  if (left < right && top < bottom) {
    const targetArea = targetRect.width * targetRect.height;
    const entryArea = elementRect.width * elementRect.height;
    const intersectionArea = width * height;
    const intersectionRatio = intersectionArea / (targetArea + entryArea - intersectionArea);
    return Number(intersectionRatio.toFixed(4));
  }
  return 0;
};
var setElementStyles = (renderer, elem, styles) => {
  const props = Object.keys(styles);
  props.forEach((p) => {
    renderer.setStyle(elem, p, styles[p]);
  });
};
var noop2 = () => {
};
var DragStateService = class _DragStateService {
  constructor() {
    this.setCallbacks();
  }
  dragTarget = null;
  dropTarget = null;
  dragTargets = [];
  dropTargets = [];
  pressed = false;
  ignoreMouse = false;
  autoScroll = true;
  isScrolling = false;
  scrollableParent = null;
  autoScrollDirection = {
    horizontal: true,
    vertical: true
  };
  initialClientOffset = {
    x: 0,
    y: 0
  };
  clientOffset = {
    x: 0,
    y: 0
  };
  initialScrollOffset = {
    x: 0,
    y: 0
  };
  scrollOffset = {
    x: 0,
    y: 0
  };
  offset = {
    x: 0,
    y: 0
  };
  pageOffset = {
    x: 0,
    y: 0
  };
  velocity = {
    x: 0,
    y: 0
  };
  dragTargetDirective;
  state;
  dragIndex = null;
  dropIndex = null;
  dragData;
  dragTargetId;
  callbacks = {};
  scrollInterval = null;
  handleDragAndDrop(action) {
    this.updateState();
    dispatchDragAndDrop(this.state, action, this.callbacks);
  }
  setPressed(pressed) {
    this.pressed = pressed;
  }
  setScrolling(isScrolling) {
    this.isScrolling = isScrolling;
    if (isScrolling) {
      const scrollableParent = getScrollableParent(document.elementFromPoint(this.clientOffset.x, this.clientOffset.y));
      window.clearInterval(this.scrollInterval);
      this.scrollInterval = window.setInterval(() => {
        autoScroll(scrollableParent, {
          x: this.velocity.x,
          y: this.velocity.y
        });
      }, 50);
    } else {
      if (this.scrollInterval) {
        window.clearInterval(this.scrollInterval);
        this.scrollInterval = null;
      }
    }
  }
  setVelocity(velocity) {
    this.velocity = velocity;
  }
  setOffset(offset) {
    this.offset = offset;
  }
  setClientOffset(clientOffset) {
    this.clientOffset = clientOffset;
  }
  setPageOffset(pageOffset) {
    this.pageOffset = pageOffset;
  }
  setInitialClientOffset(initialClientOffset) {
    this.initialClientOffset = initialClientOffset;
  }
  setScrollOffset(scrollOffset) {
    this.scrollOffset = scrollOffset;
  }
  setInitialScrollOffset(initialScrollOffset) {
    this.initialScrollOffset = initialScrollOffset;
  }
  get dragTargetPresent() {
    return isPresent3(this.dragTarget?.element);
  }
  get dropTargetPresent() {
    return isPresent3(this.dropTarget?.element);
  }
  updateState() {
    this.state = {
      drag: this.dragTarget,
      drop: this.dropTarget,
      drags: this.dragTargets,
      drops: this.dropTargets,
      pressed: this.pressed,
      ignoreMouse: this.ignoreMouse,
      autoScroll: this.autoScroll,
      isScrolling: this.isScrolling,
      scrollableParent: this.scrollableParent,
      autoScrollDirection: this.autoScrollDirection,
      initialClientOffset: this.initialClientOffset,
      clientOffset: this.clientOffset,
      initialScrollOffset: this.initialScrollOffset,
      scrollOffset: this.scrollOffset,
      offset: this.offset,
      pageOffset: this.pageOffset,
      velocity: this.velocity
    };
  }
  setCallbacks() {
    this.callbacks = {
      onVelocityChange: this.setVelocity.bind(this),
      onOffsetChange: this.setOffset.bind(this),
      onClientOffsetChange: this.setClientOffset.bind(this),
      onPageOffsetChange: this.setPageOffset.bind(this),
      onInitialClientOffsetChange: this.setInitialClientOffset.bind(this),
      onScrollOffsetChange: this.setScrollOffset.bind(this),
      onInitialScrollOffsetChange: this.setInitialScrollOffset.bind(this),
      onIsPressedChange: this.setPressed.bind(this),
      onIsScrollingChange: this.setScrolling.bind(this)
    };
  }
  ngOnDestroy() {
    if (this.scrollInterval) {
      window.clearInterval(this.scrollInterval);
      this.scrollInterval = null;
    }
  }
  static ɵfac = function DragStateService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DragStateService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _DragStateService,
    factory: _DragStateService.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DragStateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var HintComponent = class _HintComponent {
  element;
  template;
  directive;
  targetIndex;
  contextData;
  customContext;
  pointerEvents = "none";
  constructor(element) {
    this.element = element;
  }
  static ɵfac = function HintComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HintComponent)(ɵɵdirectiveInject(ElementRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _HintComponent,
    selectors: [["kendo-draghint"]],
    hostVars: 2,
    hostBindings: function HintComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵstyleProp("pointer-events", ctx.pointerEvents);
      }
    },
    inputs: {
      template: "template",
      directive: "directive",
      targetIndex: "targetIndex",
      contextData: "contextData",
      customContext: "customContext"
    },
    decls: 1,
    vars: 6,
    consts: [[3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
    template: function HintComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementContainer(0, 0);
      }
      if (rf & 2) {
        ɵɵproperty("ngTemplateOutlet", ctx.template)("ngTemplateOutletContext", ctx.customContext || ɵɵpureFunction3(2, _c02, ctx.directive, ctx.targetIndex, ctx.contextData));
      }
    },
    dependencies: [NgTemplateOutlet],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HintComponent, [{
    type: Component,
    args: [{
      selector: "kendo-draghint",
      template: `
        <ng-container
            [ngTemplateOutlet]="template"
            [ngTemplateOutletContext]="customContext || { $implicit: this.directive, index: this.targetIndex, data: this.contextData }">
        </ng-container>
    `,
      standalone: true,
      imports: [NgTemplateOutlet]
    }]
  }], () => [{
    type: ElementRef
  }], {
    template: [{
      type: Input
    }],
    directive: [{
      type: Input
    }],
    targetIndex: [{
      type: Input
    }],
    contextData: [{
      type: Input
    }],
    customContext: [{
      type: Input
    }],
    pointerEvents: [{
      type: HostBinding,
      args: ["style.pointer-events"]
    }]
  });
})();
var DragTargetPressEvent = class {
  /**
   * The information related to the current drag event.
   * This is the normalized drag event that contains details about the drag operation.
   */
  dragEvent;
  /**
   * The DOM element being dragged.
   */
  dragTarget;
  /**
   * The identifier passed to the `dragTargetId` input property of the `DragTarget` or `DragTargetContainer` directive.
   */
  dragTargetId;
  /**
   * The index of the current drag target in the collection of drag targets. Applies to `DragTargetContainer` directive.
   */
  dragTargetIndex;
  /**
   * Left for backward compatibility for the DragTarget deprecated events.
   * @hidden
   */
  get normalizedEvent() {
    return this.dragEvent;
  }
  /**
   * Left for backward compatibility for the DragTarget deprecated events.
   * @hidden
   */
  get hostElement() {
    return this.dragTarget;
  }
  /**
   * @hidden
   */
  constructor(args) {
    Object.assign(this, args);
  }
};
var DragTargetDragReadyEvent = class {
  /**
   * The information related to the current drag event.
   * This is the normalized drag event that contains details about the drag operation.
   */
  dragEvent;
  /**
   * The DOM element being dragged.
   */
  dragTarget;
  /**
   * The identifier passed to the `dragTargetId` input property of the `DragTarget` or `DragTargetContainer` directive.
   */
  dragTargetId;
  /**
   * The index of the current drag target in the collection of drag targets. Applies to `DragTargetContainer` directive.
   */
  dragTargetIndex;
  /**
   * @hidden
   */
  constructor(args) {
    Object.assign(this, args);
  }
};
var DragTargetDragStartEvent = class extends PreventableEvent {
  /**
   * The information related to the current drag event.
   * This is the normalized drag event that contains details about the drag operation.
   */
  dragEvent;
  /**
   * The DOM element being dragged.
   */
  dragTarget;
  /**
   * The identifier passed to the `dragTargetId` input property of the `DragTarget` or `DragTargetContainer` directive.
   */
  dragTargetId;
  /**
   * The index of the current drag target in the collection of drag targets. Applies to `DragTargetContainer` directive.
   */
  dragTargetIndex;
  /**
   * Left for backward compatibility for the DragTarget deprecated events.
   * @hidden
   */
  get normalizedEvent() {
    return this.dragEvent;
  }
  /**
   * Left for backward compatibility for the DragTarget deprecated events.
   * @hidden
   */
  get hostElement() {
    return this.dragTarget;
  }
  /**
   * @hidden
   */
  constructor(args) {
    super();
    Object.assign(this, args);
  }
};
var DragTargetDragEndEvent = class {
  /**
   * The information related to the current drag event.
   * This is the normalized drag event that contains details about the drag operation.
   */
  dragEvent;
  /**
   * The DOM element being dragged.
   */
  dragTarget;
  /**
   * The identifier passed to the `dragTargetId` input property of the `DragTarget` or `DragTargetContainer` directive.
   */
  dragTargetId;
  /**
   * The index of the current drag target in the collection of drag targets. Applies to `DragTargetContainer` directive.
   */
  dragTargetIndex;
  /**
   * Left for backward compatibility for the DragTarget deprecated events.
   * @hidden
   */
  get normalizedEvent() {
    return this.dragEvent;
  }
  /**
   * Left for backward compatibility for the DragTarget deprecated events.
   * @hidden
   */
  get hostElement() {
    return this.dragTarget;
  }
  /**
   * @hidden
   */
  constructor(args) {
    Object.assign(this, args);
  }
};
var DragTargetDragEvent = class extends PreventableEvent {
  /**
   * The information related to the current drag event.
   * This is the normalized drag event that contains details about the drag operation.
   */
  dragEvent;
  /**
   * The DOM element being dragged.
   */
  dragTarget;
  /**
   * The hint element of the `DragTarget`.
   */
  hintElement;
  /**
   * The identifier passed to the `dragTargetId` input property of the `DragTarget` or `DragTargetContainer` directive.
   */
  dragTargetId;
  /**
   * The index of the current drag target in the collection of drag targets. Applies to `DragTargetContainer` directive.
   */
  dragTargetIndex;
  /**
   * Left for backward compatibility for the DragTarget deprecated events.
   * @hidden
   */
  get normalizedEvent() {
    return this.dragEvent;
  }
  /**
   * Left for backward compatibility for the DragTarget deprecated events.
   * @hidden
   */
  get hostElement() {
    return this.dragTarget;
  }
  /**
   * @hidden
   */
  constructor(args) {
    super();
    Object.assign(this, args);
  }
};
var DragTargetReleaseEvent = class {
  /**
   * The information related to the current drag event.
   * This is the normalized drag event that contains details about the drag operation.
   */
  dragEvent;
  /**
   * The DOM element being dragged.
   */
  dragTarget;
  /**
   * The identifier passed to the `dragTargetId` input property of the `DragTarget` or `DragTargetContainer` directive.
   */
  dragTargetId;
  /**
   * The index of the current drag target in the collection of drag targets. Applies to `DragTargetContainer` directive.
   */
  dragTargetIndex;
  /**
   * Left for backward compatibility for the DragTarget deprecated events.
   * @hidden
   */
  get normalizedEvent() {
    return this.dragEvent;
  }
  /**
   * Left for backward compatibility for the DragTarget deprecated events.
   * @hidden
   */
  get hostElement() {
    return this.dragTarget;
  }
  /**
   * @hidden
   */
  constructor(args) {
    Object.assign(this, args);
  }
};
var isDragStartPrevented$1 = false;
var isDragPrevented$1 = false;
var DragTargetContainerDirective = class _DragTargetContainerDirective {
  wrapper;
  ngZone;
  renderer;
  service;
  viewContainer;
  cdr;
  /**
   * Defines whether a hint will be used for dragging. By default, the hint is a copy of the current drag target. [See example]({% slug drag_hint %}).
   *
   * @default false
   */
  hint = false;
  /**
   * Sets a selector for elements in the container to make them draggable. The possible values include any
   * DOM `selector`. [See example]({% slug drag_target_container %}).
   */
  set dragTargetFilter(value) {
    this._dragTargetFilter = value;
    if (!this.dragDisabled) {
      this.initializeDragTargets();
    }
  }
  get dragTargetFilter() {
    return this._dragTargetFilter;
  }
  /**
   * Sets a selector for elements inside each drag target to use as drag handles.
   */
  dragHandle;
  /**
   * Sets the delay in milliseconds before dragging begins. [See example](slug:drag_target_container#toc-events).
   *
   * @default 0
   */
  dragDelay = 0;
  /**
   * Sets the number of pixels the pointer must move before dragging starts. [See example]({% slug minimum_distance %}).
   *
   * @default 0
   */
  threshold = 0;
  /**
   * Sets a unique identifier for each drag target.
   * It exposes the current drag target HTML element and its index in the collection of drag targets as arguments.
   */
  set dragTargetId(fn) {
    if (isDevMode && typeof fn !== "function") {
      throw new Error(`dragTargetId must be a function, but received ${JSON.stringify(fn)}.`);
    }
    this._dragTargetId = fn;
  }
  get dragTargetId() {
    return this._dragTargetId;
  }
  /**
   * Sets a callback function to return custom data for `DropTarget` events.
   * It exposes the current `DragTarget` HTML element, its `dragTargetId`, and its index in the collection of drag targets as arguments.
   */
  set dragData(fn) {
    if (isDevMode && typeof fn !== "function") {
      throw new Error(`dragData must be a function, but received ${JSON.stringify(fn)}.`);
    }
    this._dragData = fn;
  }
  get dragData() {
    return this._dragData;
  }
  /**
   * Disables dragging of drag targets in the container when set to `true`.
   *
   * @default false
   */
  set dragDisabled(value) {
    this._dragDisabled = value;
    if (value) {
      this.clearPreviousTargets();
      this.removeListeners();
      if (isPresent3(this.hintElem)) {
        this.destroyHint();
      }
    } else {
      if (isPresent3(this.wrapper) || isPresent3(this.currentDragTarget)) {
        this.subscribe();
      }
      this.initializeDragTargets();
    }
  }
  get dragDisabled() {
    return this._dragDisabled;
  }
  /**
   * Sets whether to use the default dragging behavior or handle it manually.
   *
   * @default 'auto'
   */
  mode = "auto";
  /**
   * Sets the cursor style of the drag targets. Accepts same values as the [CSS `cursor` property](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor#values).
   *
   * @default 'move'
   */
  cursorStyle = "move";
  /**
   * @hidden
   */
  hintContext;
  /**
   * Fires when a drag target's `dragDelay` has passed and the user can drag the element.
   */
  onDragReady = new EventEmitter();
  /**
   * Fires when the user presses a drag target element.
   */
  onPress = new EventEmitter();
  /**
   * Fires when dragging of a drag target element begins.
   */
  onDragStart = new EventEmitter();
  /**
   * Fires while the user drags a drag target element.
   */
  onDrag = new EventEmitter();
  /**
   * Fires when the user releases a drag target element after pressing it.
   */
  onRelease = new EventEmitter();
  /**
   * Fires when dragging of a drag target ends and the element is released.
   */
  onDragEnd = new EventEmitter();
  /**
   * Notifies the `DragTargetContainer` that its content has changed.
   */
  notify() {
    this.cdr.detectChanges();
    this.initializeDragTargets();
  }
  currentDragTarget = null;
  dragTimeout = null;
  pressed = false;
  dragStarted = false;
  hintComponent = null;
  defaultHint = null;
  currentDragTargetElement = null;
  scrollableParent = null;
  previousDragTargets = [];
  initialPosition = {
    x: 0,
    y: 0
  };
  position = {
    x: 0,
    y: 0
  };
  positionsMap = /* @__PURE__ */ new Map();
  _dragTargetFilter = null;
  _dragDisabled = false;
  _dragData = () => null;
  _dragTargetId = () => null;
  prevUserSelect;
  get allDragTargets() {
    return this.queryHost(this.dragTargetFilter);
  }
  get dragHandles() {
    return this.isHandleSelectorValid ? this.queryHost(this.dragHandle) : null;
  }
  get hintTemplate() {
    return isPresent3(this.hint) && typeof this.hint === "object" ? this.hint.hintTemplate : null;
  }
  constructor(wrapper, ngZone, renderer, service, viewContainer, cdr) {
    this.wrapper = wrapper;
    this.ngZone = ngZone;
    this.renderer = renderer;
    this.service = service;
    this.viewContainer = viewContainer;
    this.cdr = cdr;
    validatePackage(packageMetadata2);
  }
  ngAfterViewInit() {
    const isTargetPresent = isPresent3(this.wrapper) || isPresent3(this.currentDragTarget);
    if (!this.dragDisabled && isTargetPresent) {
      this.subscribe();
    }
    !this.dragDisabled && this.initializeDragTargets();
  }
  ngOnDestroy() {
    this.removeListeners();
  }
  onPointerDown(event) {
    const filterElement = closestBySelector(event.target, this.isHandleSelectorValid ? this.dragHandle : this.dragTargetFilter);
    if (this.dragTargetFilter === "" || !isPresent3(filterElement)) {
      return;
    }
    if (isPresent3(this.dragHandles) && !this.isDragHandle(event.target)) {
      return;
    }
    const action = getAction(event, this.currentDragTarget);
    this.service.handleDragAndDrop(action);
    this.subscribe();
  }
  onTouchStart(event) {
    const filterElement = closestBySelector(event.target, this.isHandleSelectorValid ? this.dragHandle : this.dragTargetFilter);
    if (this.dragTargetFilter === "" || !isPresent3(filterElement)) {
      return;
    }
    if (isPresent3(this.dragHandles) && !this.isDragHandle(event.target)) {
      return;
    }
    event.preventDefault();
    const action = getAction(event, this.currentDragTarget);
    this.service.handleDragAndDrop(action);
    this.subscribe();
  }
  onPointerMove(event) {
    const action = getAction(event, this.currentDragTarget);
    this.service.handleDragAndDrop(action);
  }
  onTouchMove(event) {
    event.preventDefault();
    const action = getAction(event, this.currentDragTarget);
    this.service.handleDragAndDrop(action);
  }
  onPointerUp(event) {
    const action = getAction(event, this.currentDragTarget);
    this.service.handleDragAndDrop(action);
    this.subscribe();
  }
  onContextMenu(event) {
    event.preventDefault();
    const action = getAction(event, this.currentDragTarget);
    this.service.handleDragAndDrop(action);
    this.subscribe();
  }
  handlePress(event) {
    if (this.dragDelay > 0) {
      this.dragTimeout = window.setTimeout(() => {
        this.pressed = true;
        this.emitZoneAwareEvent("onDragReady", event);
      }, this.dragDelay);
    } else {
      this.pressed = true;
    }
    const eventTarget = event.originalEvent.target;
    this.currentDragTargetElement = closestBySelector(eventTarget, this.dragTargetFilter);
    this.currentDragTarget.element = this.currentDragTargetElement;
    this.service.dragIndex = this.getDragIndex();
    this.scrollableParent = this.hintTemplate ? document.body : this.currentDragTargetElement ? getScrollableParent(this.currentDragTargetElement) : null;
    this.prevUserSelect = this.currentDragTargetElement.style.userSelect;
    this.renderer.setStyle(this.currentDragTargetElement, "user-select", "none");
    this.emitZoneAwareEvent("onPress", event);
  }
  handleDragStart(event) {
    if (!this.pressed) {
      if (this.dragTimeout) {
        window.clearTimeout(this.dragTimeout);
        this.dragTimeout = null;
      }
      return;
    }
    isDragStartPrevented$1 = this.emitZoneAwareEvent("onDragStart", event).isDefaultPrevented();
    if (isDragStartPrevented$1) {
      return;
    }
    this.position = this.positionsMap.has(this.currentDragTargetElement) ? this.positionsMap.get(this.currentDragTargetElement) : {
      x: 0,
      y: 0
    };
    if (this.hint) {
      this.createHint();
      if (this.mode === "auto") {
        this.renderer.setStyle(this.currentDragTargetElement, "opacity", "0.7");
      }
    } else {
      this.initialPosition = {
        x: event.clientX - this.position.x,
        y: event.clientY - this.position.y
      };
    }
    this.dragStarted = this.threshold === 0;
    this.service.dragTarget = this.currentDragTarget;
    const targetIdArgs = {
      dragTarget: this.currentDragTargetElement,
      dragTargetIndex: this.service.dragIndex
    };
    this.service.dragTargetId = this.dragTargetId(targetIdArgs);
    const targetDataArgs = Object.assign({
      dragTargetId: this.service.dragTargetId
    }, targetIdArgs);
    this.service.dragData = this.dragData(targetDataArgs);
  }
  handleDrag(event) {
    if (!this.pressed || isDragStartPrevented$1) {
      return;
    }
    const elem = this.hint ? this.hintElem : this.currentDragTargetElement;
    this.position = this.calculatePosition(elem, event);
    const thresholdNotReached = Math.abs(this.position.x) < this.threshold && Math.abs(this.position.y) < this.threshold;
    if (!this.dragStarted && thresholdNotReached) {
      return;
    }
    if (!this.dragStarted && this.threshold > 0) {
      this.dragStarted = true;
    }
    isDragPrevented$1 = this.emitZoneAwareEvent("onDrag", event).isDefaultPrevented();
    if (isDragPrevented$1) {
      return;
    }
    if (this.mode === "auto") {
      this.performDrag();
    } else {
      this.dragStarted = true;
    }
  }
  handleRelease(event) {
    if (this.dragStarted) {
      this.positionsMap.set(this.currentDragTargetElement, this.position);
    }
    if (this.dragTimeout) {
      clearTimeout(this.dragTimeout);
      this.dragTimeout = null;
    }
    this.pressed = false;
    this.prevUserSelect ? this.renderer.setStyle(this.currentDragTargetElement, "user-select", this.prevUserSelect) : this.renderer.removeStyle(this.currentDragTargetElement, "user-select");
    this.prevUserSelect = null;
    this.emitZoneAwareEvent("onRelease", event);
  }
  handleDragEnd(event) {
    if (!this.dragStarted) {
      return;
    }
    if (this.mode === "auto") {
      const isDroppedOverParentTarget = isPresent3(this.service.dropTarget) && !contains(this.service.dropTarget?.element, this.service.dragTarget?.element, true);
      const elem = this.hint ? this.hintElem : this.currentDragTargetElement;
      if (isDroppedOverParentTarget || this.service.dropTargets.length > 0 && isPresent3(elem)) {
        this.renderer.removeStyle(elem, "transform");
        setElementStyles(this.renderer, elem, {
          transition: dragTargetTransition
        });
        this.positionsMap.delete(this.currentDragTargetElement);
      }
    }
    if (this.hint && isPresent3(this.hintElem)) {
      this.destroyHint();
      if (this.mode === "auto") {
        this.renderer.removeStyle(this.currentDragTargetElement, "opacity");
      }
    }
    this.service.dragTarget = null;
    this.service.dragIndex = null;
    this.currentDragTarget.element = null;
    this.emitZoneAwareEvent("onDragEnd", event);
    if (isDragStartPrevented$1 || isDragPrevented$1) {
      return;
    }
    this.dragStarted = false;
  }
  get nativeElement() {
    return this.wrapper.nativeElement;
  }
  get hintElem() {
    return this.hintTemplate && isPresent3(this.hintComponent) ? this.hintComponent.instance.element.nativeElement : this.defaultHint;
  }
  removeListeners() {
    if (isPresent3(this.scrollableParent)) {
      this.scrollableParent.removeEventListener("scroll", this.onPointerMove);
    }
    const element = this.nativeElement;
    if (!isDocumentAvailable()) {
      return;
    }
    document.removeEventListener("pointermove", this.onPointerMove);
    document.removeEventListener("pointerup", this.onPointerUp, true);
    document.removeEventListener("pointercancel", this.onPointerUp);
    document.removeEventListener("contextmenu", this.onContextMenu);
    window.removeEventListener("touchmove", noop2);
    element.removeEventListener("touchmove", this.onTouchMove);
    element.removeEventListener("touchend", this.onPointerUp);
    document.removeEventListener("mousemove", this.onPointerMove);
    document.removeEventListener("mouseup", this.onPointerUp);
    document.removeEventListener("touchcancel", this.onPointerUp);
    element.removeEventListener("pointerdown", this.onPointerDown);
    element.removeEventListener("mousedown", this.onPointerDown);
    element.removeEventListener("touchstart", this.onTouchStart);
  }
  get supportPointerEvent() {
    return Boolean(typeof window !== "undefined" && window.PointerEvent);
  }
  subscribe() {
    this.ngZone.runOutsideAngular(() => {
      this.removeListeners();
      if (!(isDocumentAvailable() && isPresent3(this.wrapper))) {
        return;
      }
      this.onPointerMove = this.onPointerMove.bind(this);
      this.onPointerUp = this.onPointerUp.bind(this);
      this.onTouchMove = this.onTouchMove.bind(this);
      this.onContextMenu = this.onContextMenu.bind(this);
      this.onPointerDown = this.onPointerDown.bind(this);
      this.onTouchStart = this.onTouchStart.bind(this);
      const element = this.nativeElement;
      if (this.supportPointerEvent) {
        if (isPresent3(this.scrollableParent)) {
          this.scrollableParent.addEventListener("scroll", this.onPointerMove, {
            passive: true
          });
        }
        element.addEventListener("pointerdown", this.onPointerDown, {
          passive: true
        });
        if (this.pressed) {
          document.addEventListener("pointermove", this.onPointerMove);
          document.addEventListener("pointerup", this.onPointerUp, true);
          document.addEventListener("contextmenu", this.onContextMenu);
          document.addEventListener("pointercancel", this.onPointerUp, {
            passive: true
          });
        }
      } else {
        window.addEventListener("touchmove", noop2, {
          capture: false,
          passive: false
        });
        element.addEventListener("mousedown", this.onPointerDown, {
          passive: true
        });
        element.addEventListener("touchstart", this.onTouchStart, {
          passive: true
        });
        if (this.pressed) {
          document.addEventListener("mousemove", this.onPointerMove, {
            passive: true
          });
          document.addEventListener("mouseup", this.onPointerUp, {
            passive: true
          });
          element.addEventListener("touchmove", this.onTouchMove, {
            passive: true
          });
          element.addEventListener("touchend", this.onPointerUp, {
            passive: true
          });
        }
      }
    });
  }
  emitZoneAwareEvent(event, normalizedEvent) {
    const targetIdArgs = {
      dragTarget: this.currentDragTargetElement,
      dragTargetIndex: this.service.dragIndex
    };
    const eventProps = {
      dragTarget: this.currentDragTargetElement,
      dragEvent: normalizedEvent,
      dragTargetIndex: this.service.dragIndex,
      dragTargetId: this.dragTargetId(targetIdArgs)
    };
    if (this.hint && isPresent3(this.hintElem)) {
      eventProps.hintElement = this.hintElem;
    }
    let eventArgs;
    switch (event) {
      case "onDragReady":
        eventArgs = new DragTargetDragReadyEvent(eventProps);
        break;
      case "onPress":
        eventArgs = new DragTargetPressEvent(eventProps);
        break;
      case "onDragStart":
        eventArgs = new DragTargetDragStartEvent(eventProps);
        break;
      case "onDrag":
        eventArgs = new DragTargetDragEvent(eventProps);
        break;
      case "onRelease":
        eventArgs = new DragTargetReleaseEvent(eventProps);
        break;
      case "onDragEnd":
        eventArgs = new DragTargetDragEndEvent(eventProps);
        break;
      default:
        break;
    }
    this.ngZone.run(() => {
      this[event].emit(eventArgs);
    });
    return eventArgs;
  }
  createHint() {
    if (!(isDocumentAvailable() && isPresent3(this.wrapper))) {
      return;
    }
    if (isPresent3(this.hint) && typeof this.hint === "object") {
      if (isPresent3(this.hint.hintTemplate)) {
        this.createCustomHint();
      } else {
        this.createDefaultHint();
      }
    } else {
      this.createDefaultHint();
    }
    this.currentDragTarget.hint = this.hintElem;
    if (typeof this.hint === "object" && isPresent3(this.hint.appendTo)) {
      this.hint.appendTo.element.nativeElement.appendChild(this.hintElem);
    } else {
      document.body.appendChild(this.hintElem);
    }
  }
  createDefaultHint() {
    this.defaultHint = this.currentDragTargetElement.cloneNode(true);
    if (typeof this.hint === "object") {
      if (isPresent3(this.hint.hintClass)) {
        const hintClasses = parseCSSClassNames(this.hint.hintClass);
        hintClasses.forEach((className) => this.renderer.addClass(this.defaultHint, className));
      }
    }
  }
  createCustomHint() {
    if (isPresent3(this.hint.appendTo)) {
      this.hintComponent = this.hint.appendTo.createComponent(HintComponent);
    } else {
      this.hintComponent = this.viewContainer.createComponent(HintComponent);
    }
    this.hintComponent.instance.template = this.hintTemplate;
    this.hintComponent.instance.directive = this;
    this.hintComponent.instance.targetIndex = this.service.dragIndex;
    const targetDataArgs = {
      dragTarget: this.currentDragTargetElement,
      dragTargetId: this.service.dragTargetId,
      dragTargetIndex: this.service.dragIndex
    };
    this.hintComponent.instance.contextData = this.dragData(targetDataArgs);
    this.hintComponent.instance.customContext = this.hintContext;
    this.hintComponent.changeDetectorRef.detectChanges();
  }
  destroyHint() {
    if (isPresent3(this.hintTemplate)) {
      this.hintComponent.destroy();
      this.hintComponent.changeDetectorRef.detectChanges();
      this.hintComponent = null;
    } else {
      document.body.removeChild(this.defaultHint);
      this.defaultHint = null;
    }
    this.currentDragTarget.hint = null;
  }
  getDragIndex() {
    return this.allDragTargets.indexOf(this.currentDragTargetElement);
  }
  initializeDragTargets() {
    if (!isPresent3(this.allDragTargets)) {
      if (this.previousDragTargets.length > 0) {
        this.clearPreviousTargets();
      }
      return;
    }
    this.allDragTargets.forEach((dragTargetEl) => {
      const isDragTargetInitialized = this.service.dragTargets.find((dt) => dt.element === dragTargetEl);
      if (!isDragTargetInitialized) {
        this.service.dragTargets.push({
          element: dragTargetEl,
          hint: null,
          onPress: this.handlePress.bind(this),
          onRelease: this.handleRelease.bind(this),
          onDragStart: this.handleDragStart.bind(this),
          onDrag: this.handleDrag.bind(this),
          onDragEnd: this.handleDragEnd.bind(this)
        });
      }
    });
    if (this.previousDragTargets.length > 0) {
      const dragTargetsToRemove = this.previousDragTargets.filter((dt) => !this.allDragTargets.includes(dt));
      dragTargetsToRemove.forEach((dragTarget) => {
        const idx2 = this.service.dragTargets.findIndex((serviceDragTarget) => serviceDragTarget.element === dragTarget);
        if (idx2 > -1) {
          this.service.dragTargets.splice(idx2, 1);
        }
      });
    }
    this.previousDragTargets = this.allDragTargets;
    this.currentDragTarget = {
      element: null,
      hint: null,
      onPress: this.handlePress.bind(this),
      onRelease: this.handleRelease.bind(this),
      onDragStart: this.handleDragStart.bind(this),
      onDrag: this.handleDrag.bind(this),
      onDragEnd: this.handleDragEnd.bind(this)
    };
    this.setTargetStyles();
  }
  isDragHandle(el) {
    return this.dragHandles.some((dh) => contains(dh, el, true));
  }
  get isHandleSelectorValid() {
    return isPresent3(this.dragHandle) && this.dragHandle !== "";
  }
  setTargetStyles() {
    if (!isDocumentAvailable()) {
      return;
    }
    if (isPresent3(this.dragHandle) && this.dragHandle !== "") {
      if (isPresent3(this.dragHandles) && this.dragHandles.length > 0) {
        this.dragHandles.forEach((handle) => {
          this.renderer.setStyle(handle, "cursor", this.cursorStyle);
          this.renderer.setStyle(handle, "touch-action", "none");
        });
      }
    } else {
      this.allDragTargets.forEach((target) => {
        this.renderer.setStyle(target, "cursor", this.cursorStyle);
        this.renderer.setStyle(target, "touch-action", "none");
      });
    }
  }
  queryHost(selector) {
    if (isPresent3(selector) && selector !== "") {
      return Array.from(this.nativeElement.querySelectorAll(selector));
    }
  }
  clearPreviousTargets() {
    this.previousDragTargets.forEach((dragTarget) => {
      const idx2 = this.service.dragTargets.findIndex((serviceDragTarget) => serviceDragTarget.element === dragTarget);
      if (idx2 > -1) {
        this.service.dragTargets.splice(idx2, 1);
      }
    });
    this.previousDragTargets = [];
  }
  performDrag() {
    const elem = this.hint ? this.hintElem : this.currentDragTargetElement;
    if (elem) {
      const styles = this.getStylesPerElement(elem);
      setElementStyles(this.renderer, elem, styles);
    }
  }
  calculatePosition(element, event) {
    let position = null;
    if (!isDocumentAvailable()) {
      return {
        x: 0,
        y: 0
      };
    }
    if (element === this.hintElem) {
      position = {
        x: event.clientX + window.scrollX,
        y: event.clientY + window.scrollY
      };
    } else {
      position = {
        x: event.clientX - this.initialPosition.x + event.scrollX,
        y: event.clientY - this.initialPosition.y + event.scrollY
      };
    }
    return position;
  }
  getStylesPerElement(element) {
    if (element === this.hintElem) {
      return {
        top: `${this.position.y}px`,
        left: `${this.position.x}px`,
        transition: "none",
        position: "absolute",
        zIndex: 1999
      };
    } else {
      const transform = `translate(${this.position.x}px, ${this.position.y}px)`;
      return {
        transform,
        transition: "none"
      };
    }
  }
  static ɵfac = function DragTargetContainerDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DragTargetContainerDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(DragStateService), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(ChangeDetectorRef));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _DragTargetContainerDirective,
    selectors: [["", "kendoDragTargetContainer", ""]],
    inputs: {
      hint: "hint",
      dragTargetFilter: "dragTargetFilter",
      dragHandle: "dragHandle",
      dragDelay: "dragDelay",
      threshold: "threshold",
      dragTargetId: "dragTargetId",
      dragData: "dragData",
      dragDisabled: "dragDisabled",
      mode: "mode",
      cursorStyle: "cursorStyle",
      hintContext: "hintContext"
    },
    outputs: {
      onDragReady: "onDragReady",
      onPress: "onPress",
      onDragStart: "onDragStart",
      onDrag: "onDrag",
      onRelease: "onRelease",
      onDragEnd: "onDragEnd"
    },
    exportAs: ["kendoDragTargetContainer"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DragTargetContainerDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoDragTargetContainer]",
      exportAs: "kendoDragTargetContainer",
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: NgZone
  }, {
    type: Renderer2
  }, {
    type: DragStateService
  }, {
    type: ViewContainerRef
  }, {
    type: ChangeDetectorRef
  }], {
    hint: [{
      type: Input
    }],
    dragTargetFilter: [{
      type: Input
    }],
    dragHandle: [{
      type: Input
    }],
    dragDelay: [{
      type: Input
    }],
    threshold: [{
      type: Input
    }],
    dragTargetId: [{
      type: Input
    }],
    dragData: [{
      type: Input
    }],
    dragDisabled: [{
      type: Input
    }],
    mode: [{
      type: Input
    }],
    cursorStyle: [{
      type: Input
    }],
    hintContext: [{
      type: Input
    }],
    onDragReady: [{
      type: Output
    }],
    onPress: [{
      type: Output
    }],
    onDragStart: [{
      type: Output
    }],
    onDrag: [{
      type: Output
    }],
    onRelease: [{
      type: Output
    }],
    onDragEnd: [{
      type: Output
    }]
  });
})();
var isDragStartPrevented = false;
var isDragPrevented = false;
var DragTargetDirective = class _DragTargetDirective {
  element;
  renderer;
  ngZone;
  service;
  viewContainer;
  get touchActionStyle() {
    return this.dragHandles.length > 0 ? null : "none";
  }
  /**
   * Defines whether a hint will be used for dragging. By default, the hint is a copy of the drag target. ([see example]({% slug drag_hint %})).
   *
   * @default false
   */
  hint = false;
  /**
   * Sets the number of pixels the pointer must move before dragging starts. Applies when `manualDrag` is `false`. [See example]({% slug minimum_distance %}).
   *
   * @default 0
   */
  threshold = 0;
  /**
   * Sets the automatic container scrolling behavior when close to the edge. [See example]({% slug auto_scroll %}).
   *
   * @default true
   */
  autoScroll = true;
  /**
   * Sets a unique identifier for the drag target.
   */
  dragTargetId;
  /**
   * Sets the delay in milliseconds before dragging begins. [See example]({% slug drag_delay %}).
   *
   * @default 0
   */
  dragDelay = 0;
  /**
   * Restricts dragging to horizontal or vertical only. Applies when `mode` is `auto`. [See example]({% slug axis_lock %}).
   */
  restrictByAxis;
  /**
   * Specifies whether to use the default dragging behavior or handle it manually.
   *
   * @default 'auto'
   */
  mode = "auto";
  /**
   * Defines a callback function used for attaching custom data to the drag target.
   * The data is available in the events of the respective [`DropTarget`]({% slug api_utils_droptargetdirective %}) or [`DropTargetContainer`]({% slug api_utils_droptargetcontainerdirective %}) directives.
   * The current DragTarget HTML element and its `dragTargetId` will be available as arguments.
   */
  set dragData(fn) {
    if (isDevMode && typeof fn !== "function") {
      throw new Error(`dragData must be a function, but received ${JSON.stringify(fn)}.`);
    }
    this._dragData = fn;
  }
  get dragData() {
    return this._dragData;
  }
  /**
   * Sets the cursor style of the drag target. Accepts same values as the [CSS `cursor` property](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor#values).
   *
   * @default 'move'
   */
  cursorStyle = "move";
  /**
   * Fires when the user presses the drag target element.
   */
  onPress = new EventEmitter();
  /**
   * Fires when dragging of the drag target element begins.
   */
  onDragStart = new EventEmitter();
  /**
   * Fires while the user drags the drag target element.
   */
  onDrag = new EventEmitter();
  /**
   * Fires when the drag target's `dragDelay` has passed and the user can drag the element.
   */
  onDragReady = new EventEmitter();
  /**
   * Fires when `DragTarget` is released, either by dropping it on a drop target or by releasing the mouse button.
   */
  onRelease = new EventEmitter();
  /**
   * Fires when dragging of the drag target ends and the element is released.
   */
  onDragEnd = new EventEmitter();
  dragTarget = null;
  hintComponent = null;
  dragStarted = false;
  pressed = false;
  dragReady = false;
  dragTimeout = null;
  initialPosition = {
    x: 0,
    y: 0
  };
  position = {
    x: 0,
    y: 0
  };
  scrollableParent = null;
  defaultHint = null;
  _dragData = () => null;
  prevUserSelect;
  get hintTemplate() {
    return isPresent3(this.hint) && typeof this.hint === "object" ? this.hint.hintTemplate : null;
  }
  get nativeElement() {
    return this.element.nativeElement;
  }
  get hintElem() {
    return this.hintTemplate && isPresent3(this.hintComponent) ? this.hintComponent.instance.element.nativeElement : this.defaultHint;
  }
  onPointerDown(event) {
    if (this.dragHandles.length && !this.isDragHandle(event.target)) {
      return;
    }
    const action = getAction(event, this.dragTarget);
    this.service.handleDragAndDrop(action);
    this.service.autoScroll = typeof this.autoScroll === "object" ? this.autoScroll.enabled !== false : this.autoScroll;
    this.service.scrollableParent = this.getAutoScrollContainer();
    this.service.autoScrollDirection = typeof this.autoScroll === "object" ? this.autoScroll.direction : {
      horizontal: true,
      vertical: true
    };
    this.attachDomHandlers();
  }
  onTouchStart(event) {
    if (this.dragHandles.length && !this.isDragHandle(event.target)) {
      return;
    }
    event.preventDefault();
    const action = getAction(event, this.dragTarget);
    this.service.handleDragAndDrop(action);
    this.service.autoScroll = typeof this.autoScroll === "object" ? this.autoScroll.enabled !== false : this.autoScroll;
    this.service.scrollableParent = this.getAutoScrollContainer();
    this.service.autoScrollDirection = typeof this.autoScroll === "object" ? this.autoScroll.direction : {
      horizontal: true,
      vertical: true
    };
    this.attachDomHandlers();
  }
  onPointerMove(event) {
    const action = getAction(event, this.dragTarget);
    this.service.handleDragAndDrop(action);
  }
  onTouchMove(event) {
    event.preventDefault();
    const action = getAction(event, this.dragTarget);
    this.service.handleDragAndDrop(action);
  }
  onPointerUp(event) {
    const action = getAction(event, this.dragTarget);
    this.service.handleDragAndDrop(action);
    this.attachDomHandlers();
  }
  onContextMenu(event) {
    event.preventDefault();
    const action = getAction(event, this.dragTarget);
    this.service.handleDragAndDrop(action);
    this.attachDomHandlers();
  }
  dragHandles;
  constructor(element, renderer, ngZone, service, viewContainer) {
    this.element = element;
    this.renderer = renderer;
    this.ngZone = ngZone;
    this.service = service;
    this.viewContainer = viewContainer;
    validatePackage(packageMetadata2);
  }
  ngOnInit() {
    this.initializeDragTarget();
  }
  ngAfterContentInit() {
    if (isPresent3(this.element) || isPresent3(this.dragTarget)) {
      this.attachDomHandlers();
      if (!this.dragHandles.length) {
        this.renderer.setStyle(this.nativeElement, "cursor", this.cursorStyle);
      }
    }
    this.service.dragTargets.push(this.dragTarget);
  }
  ngOnDestroy() {
    this.removeListeners();
    const currentDragTargetIndex = this.service.dragTargets.indexOf(this.dragTarget);
    this.service.dragTargets.splice(currentDragTargetIndex, 1);
  }
  handlePress(event) {
    this.pressed = true;
    if (this.dragDelay > 0) {
      this.dragTimeout = window.setTimeout(() => {
        this.dragReady = true;
        this.emitZoneAwareEvent("onDragReady", event);
      }, this.dragDelay);
    } else {
      this.dragReady = true;
    }
    this.scrollableParent = this.dragTarget.element ? getScrollableParent(this.dragTarget.element) : null;
    this.prevUserSelect = this.dragTarget.element.style.userSelect;
    this.renderer.setStyle(this.dragTarget.element, "user-select", "none");
    this.emitZoneAwareEvent("onPress", event);
  }
  handleDragStart(event) {
    if (!this.pressed) {
      if (this.dragTimeout) {
        window.clearTimeout(this.dragTimeout);
        this.dragTimeout = null;
      }
      return;
    }
    if (!this.dragReady) {
      return;
    }
    isDragStartPrevented = this.emitZoneAwareEvent("onDragStart", event).isDefaultPrevented();
    if (isDragStartPrevented) {
      return;
    }
    if (this.hint) {
      this.createHint();
      if (this.mode === "auto") {
        this.renderer.setStyle(this.nativeElement, "opacity", "0.7");
      }
      this.initialPosition = {
        x: event.offsetX,
        y: event.offsetY
      };
    } else {
      this.initialPosition = {
        x: event.clientX - this.position.x,
        y: event.clientY - this.position.y
      };
    }
    this.dragStarted = this.threshold === 0;
    this.service.dragTarget = this.dragTarget;
    this.service.dragTargetDirective = this;
    this.service.dragData = this.dragData({
      dragTarget: this.dragTarget.element,
      dragTargetId: this.dragTargetIdResult,
      dragTargetIndex: null
    });
  }
  handleDrag(event) {
    if (!this.pressed || !this.dragReady || isDragStartPrevented) {
      return;
    }
    const elem = this.hint ? this.hintElem : this.nativeElement;
    this.position = this.calculatePosition(elem, event);
    const thresholdNotReached = Math.abs(this.position.x) < this.threshold && Math.abs(this.position.y) < this.threshold;
    if (!this.dragStarted && thresholdNotReached) {
      return;
    }
    if (!this.dragStarted && this.threshold > 0) {
      this.dragStarted = true;
    }
    isDragPrevented = this.emitZoneAwareEvent("onDrag", event).isDefaultPrevented();
    if (isDragPrevented) {
      return;
    }
    if (this.mode === "auto") {
      this.performDrag();
    } else {
      this.dragStarted = true;
    }
  }
  handleRelease(event) {
    if (this.dragTimeout) {
      clearTimeout(this.dragTimeout);
      this.dragTimeout = null;
    }
    this.pressed = false;
    this.dragReady = false;
    if (this.prevUserSelect) {
      this.renderer.setStyle(this.dragTarget.element, "user-select", this.prevUserSelect);
    } else {
      this.renderer.removeStyle(this.dragTarget.element, "user-select");
    }
    this.prevUserSelect = null;
    this.emitZoneAwareEvent("onRelease", event);
  }
  handleDragEnd(event) {
    if (this.mode === "auto") {
      const isDroppedOverParentTarget = isPresent3(this.service.dropTarget) && !contains(this.service.dropTarget?.element, this.service.dragTarget?.element, true);
      const elem = this.hint ? this.hintElem : this.nativeElement;
      if (isDroppedOverParentTarget || this.service.dropTargets.length > 0 && isPresent3(elem)) {
        this.renderer.removeStyle(elem, "transform");
        setElementStyles(this.renderer, elem, {
          transition: dragTargetTransition
        });
        this.position = {
          x: 0,
          y: 0
        };
      }
    }
    if (this.hint && isPresent3(this.hintElem)) {
      this.destroyHint();
      if (this.mode === "auto") {
        this.renderer.removeStyle(this.nativeElement, "opacity");
      }
    }
    this.service.dragTarget = null;
    this.service.dragTargetDirective = null;
    if (!this.dragStarted || isDragStartPrevented || isDragPrevented) {
      return;
    }
    this.emitZoneAwareEvent("onDragEnd", event);
    this.dragStarted = false;
  }
  initializeDragTarget() {
    this.dragTarget = {
      element: this.nativeElement,
      hint: null,
      onPress: this.handlePress.bind(this),
      onRelease: this.handleRelease.bind(this),
      onDragStart: this.handleDragStart.bind(this),
      onDrag: this.handleDrag.bind(this),
      onDragEnd: this.handleDragEnd.bind(this)
    };
  }
  get supportPointerEvent() {
    return Boolean(typeof window !== "undefined" && window.PointerEvent);
  }
  removeListeners() {
    if (isPresent3(this.scrollableParent)) {
      this.scrollableParent.removeEventListener("scroll", this.onPointerMove);
    }
    const element = this.nativeElement;
    if (!isDocumentAvailable()) {
      return;
    }
    document.removeEventListener("pointermove", this.onPointerMove);
    document.removeEventListener("pointerup", this.onPointerUp, true);
    document.removeEventListener("contextmenu", this.onContextMenu);
    document.removeEventListener("pointercancel", this.onPointerUp);
    window.removeEventListener("touchmove", noop2);
    element.removeEventListener("touchmove", this.onTouchMove);
    element.removeEventListener("touchend", this.onPointerUp);
    document.removeEventListener("mousemove", this.onPointerMove);
    document.removeEventListener("mouseup", this.onPointerUp);
    document.removeEventListener("touchcancel", this.onPointerUp);
    element.removeEventListener("pointerdown", this.onPointerDown);
    element.removeEventListener("mousedown", this.onPointerDown);
    element.removeEventListener("touchstart", this.onTouchStart);
  }
  attachDomHandlers() {
    this.ngZone.runOutsideAngular(() => {
      this.removeListeners();
      if (!(isDocumentAvailable() && isPresent3(this.element))) {
        return;
      }
      this.onPointerMove = this.onPointerMove.bind(this);
      this.onPointerUp = this.onPointerUp.bind(this);
      this.onTouchMove = this.onTouchMove.bind(this);
      this.onContextMenu = this.onContextMenu.bind(this);
      this.onPointerDown = this.onPointerDown.bind(this);
      this.onTouchStart = this.onTouchStart.bind(this);
      const element = this.nativeElement;
      if (this.supportPointerEvent) {
        if (isPresent3(this.scrollableParent)) {
          if (this.scrollableParent === document.getElementsByTagName("html")[0]) {
            this.scrollableParent = window;
          }
          this.scrollableParent.addEventListener("scroll", this.onPointerMove, {
            passive: true
          });
        }
        element.addEventListener("pointerdown", this.onPointerDown, {
          passive: true
        });
        if (this.pressed) {
          document.addEventListener("pointermove", this.onPointerMove);
          document.addEventListener("pointerup", this.onPointerUp, true);
          document.addEventListener("contextmenu", this.onContextMenu);
          document.addEventListener("pointercancel", this.onPointerUp, {
            passive: true
          });
        }
      } else {
        window.addEventListener("touchmove", noop2, {
          capture: false,
          passive: false
        });
        element.addEventListener("mousedown", this.onPointerDown, {
          passive: true
        });
        element.addEventListener("touchstart", this.onTouchStart, {
          passive: true
        });
        if (this.pressed) {
          document.addEventListener("mousemove", this.onPointerMove, {
            passive: true
          });
          document.addEventListener("mouseup", this.onPointerUp, {
            passive: true
          });
          element.addEventListener("touchmove", this.onTouchMove, {
            passive: true
          });
          element.addEventListener("touchend", this.onPointerUp, {
            passive: true
          });
        }
      }
    });
  }
  isDragHandle(el) {
    return this.dragHandles.toArray().some((dh) => contains(dh.element.nativeElement, el, true));
  }
  getAutoScrollContainer() {
    return typeof this.autoScroll === "object" && this.autoScroll.boundaryElementRef && this.autoScroll.boundaryElementRef.nativeElement ? this.autoScroll.boundaryElementRef.nativeElement : null;
  }
  createHint() {
    if (!(isDocumentAvailable() && isPresent3(this.element))) {
      return;
    }
    if (isPresent3(this.hint) && typeof this.hint === "object") {
      if (isPresent3(this.hint.hintTemplate)) {
        this.createCustomHint();
      } else {
        this.createDefaultHint();
      }
    } else {
      this.createDefaultHint();
    }
    this.dragTarget.hint = this.hintElem;
    if (typeof this.hint === "object" && isPresent3(this.hint.appendTo)) {
      this.hint.appendTo.element.nativeElement.appendChild(this.hintElem);
    } else {
      document.body.appendChild(this.hintElem);
    }
  }
  createDefaultHint() {
    this.defaultHint = this.nativeElement.cloneNode(true);
    if (typeof this.hint === "object") {
      if (isPresent3(this.hint.hintClass)) {
        const hintClasses = parseCSSClassNames(this.hint.hintClass);
        hintClasses.forEach((className) => this.renderer.addClass(this.defaultHint, className));
      }
    }
  }
  createCustomHint() {
    if (isPresent3(this.hint.appendTo)) {
      this.hintComponent = this.hint.appendTo.createComponent(HintComponent);
    } else {
      this.hintComponent = this.viewContainer.createComponent(HintComponent);
    }
    this.hintComponent.instance.template = this.hintTemplate;
    this.hintComponent.instance.directive = this;
    this.hintComponent.changeDetectorRef.detectChanges();
  }
  destroyHint() {
    if (isPresent3(this.hintTemplate)) {
      this.hintComponent.destroy();
      this.hintComponent.changeDetectorRef.detectChanges();
      this.hintComponent = null;
    } else {
      if (typeof this.hint === "object" && isPresent3(this.hint.appendTo)) {
        this.hint.appendTo.element.nativeElement.removeChild(this.defaultHint);
      } else {
        document.body.removeChild(this.defaultHint);
      }
      this.defaultHint = null;
    }
    this.dragTarget.hint = null;
  }
  emitZoneAwareEvent(event, normalizedEvent) {
    const eventProps = {
      dragTarget: this.nativeElement,
      dragEvent: normalizedEvent
    };
    if (this.hint && isPresent3(this.hintElem)) {
      eventProps.hintElement = this.hintElem;
    }
    if (this.dragTargetId && this.dragTargetId !== "") {
      eventProps.dragTargetId = this.dragTargetIdResult;
    }
    let eventArgs;
    switch (event) {
      case "onDragReady":
        eventArgs = new DragTargetDragReadyEvent(eventProps);
        break;
      case "onPress":
        eventArgs = new DragTargetPressEvent(eventProps);
        break;
      case "onDragStart":
        eventArgs = new DragTargetDragStartEvent(eventProps);
        break;
      case "onDrag":
        eventArgs = new DragTargetDragEvent(eventProps);
        break;
      case "onRelease":
        eventArgs = new DragTargetReleaseEvent(eventProps);
        break;
      case "onDragEnd":
        eventArgs = new DragTargetDragEndEvent(eventProps);
        break;
      default:
        break;
    }
    this.ngZone.run(() => {
      this[event].emit(eventArgs);
    });
    return eventArgs;
  }
  get dragTargetIdResult() {
    if (this.dragTargetId && this.dragTargetId !== "") {
      return typeof this.dragTargetId === "string" ? this.dragTargetId : this.dragTargetId({
        dragTarget: this.dragTarget.element,
        dragTargetIndex: null
      });
    }
  }
  performDrag() {
    const elem = this.hint ? this.hintElem : this.nativeElement;
    if (elem) {
      const styles = this.getStylesPerElement(elem);
      setElementStyles(this.renderer, elem, styles);
    }
  }
  calculatePosition(element, event) {
    let position = null;
    if (element === this.hintElem) {
      position = {
        x: event.clientX + window.scrollX,
        y: event.clientY + window.scrollY
      };
    } else {
      position = {
        x: event.clientX - this.initialPosition.x + event.scrollX,
        y: event.clientY - this.initialPosition.y + event.scrollY
      };
    }
    if (this.restrictByAxis === "horizontal") {
      position.y = 0;
    } else if (this.restrictByAxis === "vertical") {
      position.x = 0;
    }
    return position;
  }
  getStylesPerElement(element) {
    if (element === this.hintElem) {
      const hintCoordinates = {
        x: this.position.x - this.initialPosition.x,
        y: this.position.y - this.initialPosition.y
      };
      return {
        top: `${hintCoordinates.y}px`,
        left: `${hintCoordinates.x}px`,
        transition: "none",
        position: "absolute",
        zIndex: 1999
      };
    } else {
      const transform = `translate(${this.position.x}px, ${this.position.y}px)`;
      return {
        transform,
        transition: "none"
      };
    }
  }
  static ɵfac = function DragTargetDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DragTargetDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(DragStateService), ɵɵdirectiveInject(ViewContainerRef));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _DragTargetDirective,
    selectors: [["", "kendoDragTarget", ""]],
    contentQueries: function DragTargetDirective_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, DragHandleDirective, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.dragHandles = _t);
      }
    },
    hostVars: 2,
    hostBindings: function DragTargetDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵstyleProp("touch-action", ctx.touchActionStyle);
      }
    },
    inputs: {
      hint: "hint",
      threshold: "threshold",
      autoScroll: "autoScroll",
      dragTargetId: "dragTargetId",
      dragDelay: "dragDelay",
      restrictByAxis: "restrictByAxis",
      mode: "mode",
      dragData: "dragData",
      cursorStyle: "cursorStyle"
    },
    outputs: {
      onPress: "onPress",
      onDragStart: "onDragStart",
      onDrag: "onDrag",
      onDragReady: "onDragReady",
      onRelease: "onRelease",
      onDragEnd: "onDragEnd"
    },
    exportAs: ["kendoDragTarget"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DragTargetDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoDragTarget]",
      exportAs: "kendoDragTarget",
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: NgZone
  }, {
    type: DragStateService
  }, {
    type: ViewContainerRef
  }], {
    touchActionStyle: [{
      type: HostBinding,
      args: ["style.touch-action"]
    }],
    hint: [{
      type: Input
    }],
    threshold: [{
      type: Input
    }],
    autoScroll: [{
      type: Input
    }],
    dragTargetId: [{
      type: Input
    }],
    dragDelay: [{
      type: Input
    }],
    restrictByAxis: [{
      type: Input
    }],
    mode: [{
      type: Input
    }],
    dragData: [{
      type: Input
    }],
    cursorStyle: [{
      type: Input
    }],
    onPress: [{
      type: Output
    }],
    onDragStart: [{
      type: Output
    }],
    onDrag: [{
      type: Output
    }],
    onDragReady: [{
      type: Output
    }],
    onRelease: [{
      type: Output
    }],
    onDragEnd: [{
      type: Output
    }],
    dragHandles: [{
      type: ContentChildren,
      args: [DragHandleDirective, {
        descendants: true
      }]
    }]
  });
})();
var DropTargetEvent = class {
  /**
   * The current drag target element.
   */
  dragTarget;
  /**
   * The current drop target element.
   */
  dropTarget;
  /**
   * The information related to the current drag event.
   */
  dragEvent;
  /**
   * The data passed to the `dragData` input property of the `DragTarget` or `DragTargetContainer` directive.
   */
  dragData;
  /**
   * The index of the current drop target in the collection of drop targets. Applies to `DropTargetContainer` directive.
   */
  dropTargetIndex;
  /**
   * The hint element of the `DragTarget`.
   */
  hintElement;
  /**
   * Left for backward compatibility for the DropTarget deprecated events.
   * @hidden
   */
  get normalizedEvent() {
    return this.dragEvent;
  }
  /**
   * Left for backward compatibility for the DropTarget deprecated events.
   * @hidden
   */
  get hostElement() {
    return this.dropTarget;
  }
  /**
   * @hidden
   */
  constructor(args) {
    Object.assign(this, args);
  }
};
var DropTargetContainerDirective = class _DropTargetContainerDirective {
  service;
  element;
  ngZone;
  cdr;
  /**
   * Sets a selector for elements in the container to make them drop targets. [See example]({% slug drop_target_container %}).
   */
  set dropTargetFilter(value) {
    this._dropTargetFilter = value;
    if (!this.dropDisabled) {
      this.initializeDropTargets();
    }
  }
  get dropTargetFilter() {
    return this._dropTargetFilter;
  }
  /**
   * Specifies whether the drop targets within the container will emit the corresponding events upon interaction with a drag target.
   */
  set dropDisabled(value) {
    this._dropDisabled = value;
    if (value) {
      this.clearPreviousTargets();
    } else {
      this.initializeDropTargets();
    }
  }
  get dropDisabled() {
    return this._dropDisabled;
  }
  /**
   * Fires when a drag target enters a drop target.
   */
  onDragEnter = new EventEmitter();
  /**
   * Fires when a drag target is dragged over a drop target.
   */
  onDragOver = new EventEmitter();
  /**
   * Fires when a drag target leaves a drop target.
   */
  onDragLeave = new EventEmitter();
  /**
   * Fires when a drag target is dropped over a drop target.
   */
  onDrop = new EventEmitter();
  /**
   * Notifies the `DropTargetContainer` that its content has changed.
   */
  notify() {
    this.cdr.detectChanges();
    this.initializeDropTargets();
  }
  constructor(service, element, ngZone, cdr) {
    this.service = service;
    this.element = element;
    this.ngZone = ngZone;
    this.cdr = cdr;
    validatePackage(packageMetadata2);
  }
  currentDropTargetElement = null;
  previousDropTargets = [];
  _dropTargetFilter = null;
  _dropDisabled = false;
  get nativeElement() {
    return this.element.nativeElement;
  }
  ngAfterViewInit() {
    if (!this.dropDisabled) {
      this.initializeDropTargets();
    }
  }
  get allDropTargets() {
    if (isPresent3(this.dropTargetFilter) && this.dropTargetFilter !== "") {
      return Array.from(this.nativeElement.querySelectorAll(this.dropTargetFilter));
    }
  }
  /**
   * @hidden
   */
  handleDragEnter(event) {
    if (!this.service.dragTargetPresent || this.service.dropTargetPresent) {
      return;
    }
    const currDragTargetElement = this.service.dragTarget.hint || this.service.dragTarget.element;
    const currDropTargetElem = intersect2(currDragTargetElement, this.allDropTargets);
    const currDropTarget = this.service.dropTargets.find((dt) => dt.element === currDropTargetElem);
    if (!isPresent3(currDropTargetElem) || !isPresent3(currDropTarget)) {
      return;
    }
    this.currentDropTargetElement = currDropTargetElem;
    this.service.dropTarget = currDropTarget;
    this.service.dropIndex = this.getDropIndex();
    this.emitZoneAwareEvent("onDragEnter", event);
  }
  /**
   * @hidden
   */
  handleDragLeave(event) {
    if (!this.service.dragTargetPresent || !this.service.dropTargetPresent) {
      return;
    }
    this.emitZoneAwareEvent("onDragLeave", event);
    this.currentDropTargetElement = null;
    this.service.dropTarget = null;
    this.service.dropIndex = null;
  }
  /**
   * @hidden
   */
  handleDragOver(event) {
    if (!this.service.dragTargetPresent || !this.service.dropTargetPresent) {
      return;
    }
    this.emitZoneAwareEvent("onDragOver", event);
  }
  /**
   * @hidden
   */
  handleDrop(event) {
    if (!this.service.dragTargetPresent || !this.service.dropTargetPresent) {
      return;
    }
    this.emitZoneAwareEvent("onDrop", event);
    this.currentDropTargetElement = null;
    this.service.dropTarget = null;
    this.service.dropIndex = null;
  }
  initializeDropTargets() {
    if (!isPresent3(this.allDropTargets)) {
      if (this.previousDropTargets.length > 0) {
        this.clearPreviousTargets();
      }
      return;
    }
    this.allDropTargets.forEach((dropTargetEl) => {
      const isDropTargetInitialized = this.service.dropTargets.find((dt) => dt.element === dropTargetEl);
      if (!isDropTargetInitialized) {
        this.service.dropTargets.push({
          element: dropTargetEl,
          onDragEnter: this.handleDragEnter.bind(this),
          onDragLeave: this.handleDragLeave.bind(this),
          onDragOver: this.handleDragOver.bind(this),
          onDrop: this.handleDrop.bind(this)
        });
      }
    });
    if (this.previousDropTargets.length > 0) {
      const dropTargetsToRemove = this.previousDropTargets.filter((dt) => !this.allDropTargets.includes(dt));
      dropTargetsToRemove.forEach((dropTarget) => {
        const idx2 = this.service.dropTargets.findIndex((serviceDropTarget) => serviceDropTarget.element === dropTarget);
        if (idx2 > -1) {
          this.service.dropTargets.splice(idx2, 1);
        }
      });
    }
    this.previousDropTargets = this.allDropTargets;
  }
  emitZoneAwareEvent(event, normalizedEvent) {
    const eventProps = {
      dragTarget: this.service.dragTarget?.element,
      dropTarget: this.currentDropTargetElement,
      dragData: this.service.dragData,
      dragEvent: normalizedEvent,
      dropTargetIndex: this.service.dropIndex
    };
    if (isPresent3(this.service.dragTarget?.hint)) {
      eventProps.hintElement = this.service.dragTarget.hint;
    }
    const eventArgs = new DropTargetEvent(eventProps);
    this.ngZone.run(() => {
      this[event].emit(eventArgs);
    });
  }
  getDropIndex() {
    return this.allDropTargets.indexOf(this.currentDropTargetElement);
  }
  clearPreviousTargets() {
    this.previousDropTargets.forEach((dropTarget) => {
      const idx2 = this.service.dropTargets.findIndex((serviceDropTarget) => serviceDropTarget.element === dropTarget);
      if (idx2 > -1) {
        this.service.dropTargets.splice(idx2, 1);
      }
    });
    this.previousDropTargets = [];
  }
  static ɵfac = function DropTargetContainerDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DropTargetContainerDirective)(ɵɵdirectiveInject(DragStateService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ChangeDetectorRef));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _DropTargetContainerDirective,
    selectors: [["", "kendoDropTargetContainer", ""]],
    inputs: {
      dropTargetFilter: "dropTargetFilter",
      dropDisabled: "dropDisabled"
    },
    outputs: {
      onDragEnter: "onDragEnter",
      onDragOver: "onDragOver",
      onDragLeave: "onDragLeave",
      onDrop: "onDrop"
    },
    exportAs: ["kendoDropTargetContainer"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DropTargetContainerDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoDropTargetContainer]",
      exportAs: "kendoDropTargetContainer",
      standalone: true
    }]
  }], () => [{
    type: DragStateService
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }, {
    type: ChangeDetectorRef
  }], {
    dropTargetFilter: [{
      type: Input
    }],
    dropDisabled: [{
      type: Input
    }],
    onDragEnter: [{
      type: Output
    }],
    onDragOver: [{
      type: Output
    }],
    onDragLeave: [{
      type: Output
    }],
    onDrop: [{
      type: Output
    }]
  });
})();
var DropTargetDirective = class _DropTargetDirective {
  service;
  element;
  ngZone;
  /**
   * Fires when a drag target enters the drop target.
   */
  onDragEnter = new EventEmitter();
  /**
   * Fires when a drag target is dragged over the drop target.
   */
  onDragOver = new EventEmitter();
  /**
   * Fires when a drag target leaves the drop target.
   */
  onDragLeave = new EventEmitter();
  /**
   * Fires when a drag target is dropped over the drop target.
   */
  onDrop = new EventEmitter();
  constructor(service, element, ngZone) {
    this.service = service;
    this.element = element;
    this.ngZone = ngZone;
    validatePackage(packageMetadata2);
  }
  dropTarget;
  ngOnInit() {
    this.initializeDropTarget();
    this.service.dropTargets.push(this.dropTarget);
  }
  ngOnDestroy() {
    const currentDropTargetIndex = this.service.dropTargets.indexOf(this.dropTarget);
    this.service.dropTargets.splice(currentDropTargetIndex, 1);
  }
  /**
   * @hidden
   */
  handleDragEnter(event) {
    if (!this.service.dragTarget) {
      return;
    }
    this.service.dropTarget = this.dropTarget;
    this.emitZoneAwareEvent("onDragEnter", event);
  }
  /**
   * @hidden
   */
  handleDragLeave(event) {
    this.service.dropTarget = null;
    if (!this.service.dragTarget) {
      return;
    }
    this.emitZoneAwareEvent("onDragLeave", event);
  }
  /**
   * @hidden
   */
  handleDragOver(event) {
    if (!this.service.dragTarget) {
      return;
    }
    this.emitZoneAwareEvent("onDragOver", event);
  }
  /**
   * @hidden
   */
  handleDrop(event) {
    this.emitZoneAwareEvent("onDrop", event);
    this.service.dropTarget = null;
  }
  initializeDropTarget() {
    this.dropTarget = {
      element: this.element.nativeElement,
      onDragEnter: this.handleDragEnter.bind(this),
      onDragLeave: this.handleDragLeave.bind(this),
      onDragOver: this.handleDragOver.bind(this),
      onDrop: this.handleDrop.bind(this)
    };
  }
  emitZoneAwareEvent(event, normalizedEvent) {
    const eventProps = {
      dropTarget: this.element.nativeElement,
      dragTarget: this.service.dragTarget?.element,
      dragEvent: normalizedEvent,
      dragData: this.service.dragData
    };
    if (isPresent3(this.service.dragTarget?.hint)) {
      eventProps.hintElement = this.service.dragTarget.element;
    }
    const eventArgs = new DropTargetEvent(eventProps);
    this.ngZone.run(() => {
      this[event].emit(eventArgs);
    });
  }
  static ɵfac = function DropTargetDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DropTargetDirective)(ɵɵdirectiveInject(DragStateService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _DropTargetDirective,
    selectors: [["", "kendoDropTarget", ""]],
    outputs: {
      onDragEnter: "onDragEnter",
      onDragOver: "onDragOver",
      onDragLeave: "onDragLeave",
      onDrop: "onDrop"
    },
    exportAs: ["kendoDropTarget"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DropTargetDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoDropTarget]",
      exportAs: "kendoDropTarget",
      standalone: true
    }]
  }], () => [{
    type: DragStateService
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    onDragEnter: [{
      type: Output
    }],
    onDragOver: [{
      type: Output
    }],
    onDragLeave: [{
      type: Output
    }],
    onDrop: [{
      type: Output
    }]
  });
})();
var KENDO_DRAGANDDROP = [DragTargetDirective, DragHandleDirective, DropTargetDirective, DragTargetContainerDirective, DropTargetContainerDirective, HintComponent];
var KENDO_UTILS = [...KENDO_DRAGANDDROP];
var UtilsModule = class _UtilsModule {
  static ɵfac = function UtilsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UtilsModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _UtilsModule,
    imports: [DragTargetDirective, DragHandleDirective, DropTargetDirective, DragTargetContainerDirective, DropTargetContainerDirective, HintComponent],
    exports: [DragTargetDirective, DragHandleDirective, DropTargetDirective, DragTargetContainerDirective, DropTargetContainerDirective, HintComponent]
  });
  static ɵinj = ɵɵdefineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UtilsModule, [{
    type: NgModule,
    args: [{
      exports: [...KENDO_UTILS],
      imports: [...KENDO_UTILS]
    }]
  }], null, null);
})();
var DragAndDropModule = class _DragAndDropModule {
  static ɵfac = function DragAndDropModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DragAndDropModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _DragAndDropModule,
    imports: [DragTargetDirective, DragHandleDirective, DropTargetDirective, DragTargetContainerDirective, DropTargetContainerDirective, HintComponent],
    exports: [DragTargetDirective, DragHandleDirective, DropTargetDirective, DragTargetContainerDirective, DropTargetContainerDirective, HintComponent]
  });
  static ɵinj = ɵɵdefineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DragAndDropModule, [{
    type: NgModule,
    args: [{
      exports: [...KENDO_DRAGANDDROP],
      imports: [...KENDO_DRAGANDDROP]
    }]
  }], null, null);
})();
var AdaptiveSettingsService = class _AdaptiveSettingsService {
  /**
   * @hidden
   */
  changes = new Subject();
  /**
   * Notifies subscribers that the adaptive settings have changed.
   *
   * @param adaptiveSettings - (Optional) A new value for the adaptive settings token.
   */
  notify(adaptiveSettings) {
    this.changes.next(adaptiveSettings);
  }
  static ɵfac = function AdaptiveSettingsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdaptiveSettingsService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _AdaptiveSettingsService,
    factory: _AdaptiveSettingsService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdaptiveSettingsService, [{
    type: Injectable
  }], null, null);
})();
var ADAPTIVE_SETTINGS = new InjectionToken("Kendo UI Adaptive-Settings token");
var DEFAULT_ADAPTIVE_SETTINGS = {
  small: 500,
  medium: 768
};
var AdaptiveService = class _AdaptiveService {
  _adaptiveSettings;
  zone;
  /**
   * Notifies subscribers of the initial adaptive settings, and upon each call to `notify`.
   * @hidden
   */
  changes = new BehaviorSubject(this.adaptiveSettings || {
    small: 500,
    medium: 700
  });
  /**
   * Notifies subscribers when the window size changes to any of small, medium, or large depending on the set adaptive size breakpoints.
   * @hidden
   */
  sizeChanges = new BehaviorSubject(this.size);
  subs = new Subscription();
  previousSize;
  constructor(_adaptiveSettings, adaptiveSettingsService, zone) {
    this._adaptiveSettings = _adaptiveSettings;
    this.zone = zone;
    if (adaptiveSettingsService) {
      this.subs.add(adaptiveSettingsService.changes.pipe(map((adaptiveSettings) => isPresent(adaptiveSettings) ? adaptiveSettings : this._adaptiveSettings), tap((adaptiveSettings) => this._adaptiveSettings = adaptiveSettings)).subscribe((adaptiveSettings) => this.changes.next(adaptiveSettings)));
    }
    if (isPresent(this.adaptiveSettings) && !areObjectsEqual(this.adaptiveSettings, DEFAULT_ADAPTIVE_SETTINGS)) {
      this.changes.next(this.adaptiveSettings);
    }
    if (isDocumentAvailable()) {
      this.zone.runOutsideAngular(() => {
        this.subs.add(fromEvent(window, "resize").pipe(tap(() => !this.previousSize && (this.previousSize = this.size)), filter(() => this.previousSize !== this.size)).subscribe(() => {
          this.previousSize = this.size;
          this.zone.run(() => {
            this.sizeChanges.next(this.size);
          });
        }));
      });
    }
  }
  /**
   * @hidden
   */
  get adaptiveSettings() {
    return this._adaptiveSettings;
  }
  /**
   * @hidden
   */
  get size() {
    if (!isDocumentAvailable()) {
      return;
    }
    const settings = Object.assign(DEFAULT_ADAPTIVE_SETTINGS, this.adaptiveSettings);
    if (window.innerWidth > settings.medium) {
      return "large";
    } else if (window.innerWidth > settings.small) {
      return "medium";
    } else {
      return "small";
    }
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
  static ɵfac = function AdaptiveService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdaptiveService)(ɵɵinject(ADAPTIVE_SETTINGS, 8), ɵɵinject(AdaptiveSettingsService, 8), ɵɵinject(NgZone));
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _AdaptiveService,
    factory: _AdaptiveService.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdaptiveService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ADAPTIVE_SETTINGS]
    }]
  }, {
    type: AdaptiveSettingsService,
    decorators: [{
      type: Optional
    }]
  }, {
    type: NgZone
  }], null);
})();

export {
  AppBarComponent,
  ActionSheetHeaderTemplateDirective,
  ActionSheetContentTemplateDirective,
  ActionSheetFooterTemplateDirective,
  ActionSheetTemplateDirective,
  ActionSheetComponent,
  ActionSheetViewComponent,
  DragTargetContainerDirective,
  DropTargetContainerDirective,
  AdaptiveService
};
//# sourceMappingURL=chunk-TNA2736P.js.map
