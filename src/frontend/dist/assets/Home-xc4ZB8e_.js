import { c as createLucideIcon, a as createContextScope, r as reactExports, u as useControllableState, j as jsxRuntimeExports, b as useId, P as Primitive, d as composeEventHandlers, e as Presence, f as useComposedRefs, g as useLayoutEffect2, R as React, h as createCollection, i as useDirection, k as cn, l as clsx, L as Link, B as Button, T as TrendingUp, S as Shield } from "./index-oNUYi8h0.js";
import { C as ChevronDown } from "./chevron-down-CX_UD8J1.js";
import { B as BookOpen } from "./book-open-DdM0ZRzp.js";
import { C as Calculator } from "./calculator-C0OArtMP.js";
import { m as motion } from "./proxy-BLGASNJJ.js";
import { f as filterProps, L as Layer, m as max, i as isNumber, C as Curve, A as Animate, a as interpolateNumber, b as isNil, c as isNan, d as isEqual, h as hasClipDot, e as LabelList, u as uniqueId, g as isFunction, G as Global, j as getValueByDataKey, k as getCateCoordinateOfLine, D as Dot, l as generateCategoricalChart, X as XAxis, Y as YAxis, n as formatAxisMap, R as ResponsiveContainer, T as Tooltip, B as Bar } from "./generateCategoricalChart-CU8yhsos.js";
import { B as BarChart } from "./BarChart-CsjMJIar.js";
import { L as LineChart, a as Line } from "./LineChart-BcaPu4Qf.js";
import { A as ArrowRight } from "./arrow-right--Z0eWHbT.js";
import { F as FileText } from "./file-text-Dhf36DUM.js";
import { P as PiggyBank } from "./piggy-bank-DrKiFT50.js";
import { U as Users } from "./users-Di8aSH5O.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z", key: "1b4qmf" }],
  ["path", { d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2", key: "i71pzd" }],
  ["path", { d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2", key: "10jefs" }],
  ["path", { d: "M10 6h4", key: "1itunk" }],
  ["path", { d: "M10 10h4", key: "tcdvrf" }],
  ["path", { d: "M10 14h4", key: "kelpxr" }],
  ["path", { d: "M10 18h4", key: "1ulq68" }]
];
const Building2 = createLucideIcon("building-2", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M16 17h6v-6", key: "t6n2it" }],
  ["path", { d: "m22 17-8.5-8.5-5 5L2 7", key: "x473p" }]
];
const TrendingDown = createLucideIcon("trending-down", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",
      key: "18etb6"
    }
  ],
  ["path", { d: "M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4", key: "xoc0q4" }]
];
const Wallet = createLucideIcon("wallet", __iconNode);
var COLLAPSIBLE_NAME = "Collapsible";
var [createCollapsibleContext, createCollapsibleScope] = createContextScope(COLLAPSIBLE_NAME);
var [CollapsibleProvider, useCollapsibleContext] = createCollapsibleContext(COLLAPSIBLE_NAME);
var Collapsible = reactExports.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeCollapsible,
      open: openProp,
      defaultOpen,
      disabled,
      onOpenChange,
      ...collapsibleProps
    } = props;
    const [open, setOpen] = useControllableState({
      prop: openProp,
      defaultProp: defaultOpen ?? false,
      onChange: onOpenChange,
      caller: COLLAPSIBLE_NAME
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      CollapsibleProvider,
      {
        scope: __scopeCollapsible,
        disabled,
        contentId: useId(),
        open,
        onOpenToggle: reactExports.useCallback(() => setOpen((prevOpen) => !prevOpen), [setOpen]),
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Primitive.div,
          {
            "data-state": getState$1(open),
            "data-disabled": disabled ? "" : void 0,
            ...collapsibleProps,
            ref: forwardedRef
          }
        )
      }
    );
  }
);
Collapsible.displayName = COLLAPSIBLE_NAME;
var TRIGGER_NAME$1 = "CollapsibleTrigger";
var CollapsibleTrigger = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeCollapsible, ...triggerProps } = props;
    const context = useCollapsibleContext(TRIGGER_NAME$1, __scopeCollapsible);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.button,
      {
        type: "button",
        "aria-controls": context.contentId,
        "aria-expanded": context.open || false,
        "data-state": getState$1(context.open),
        "data-disabled": context.disabled ? "" : void 0,
        disabled: context.disabled,
        ...triggerProps,
        ref: forwardedRef,
        onClick: composeEventHandlers(props.onClick, context.onOpenToggle)
      }
    );
  }
);
CollapsibleTrigger.displayName = TRIGGER_NAME$1;
var CONTENT_NAME$1 = "CollapsibleContent";
var CollapsibleContent = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { forceMount, ...contentProps } = props;
    const context = useCollapsibleContext(CONTENT_NAME$1, props.__scopeCollapsible);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Presence, { present: forceMount || context.open, children: ({ present }) => /* @__PURE__ */ jsxRuntimeExports.jsx(CollapsibleContentImpl, { ...contentProps, ref: forwardedRef, present }) });
  }
);
CollapsibleContent.displayName = CONTENT_NAME$1;
var CollapsibleContentImpl = reactExports.forwardRef((props, forwardedRef) => {
  const { __scopeCollapsible, present, children, ...contentProps } = props;
  const context = useCollapsibleContext(CONTENT_NAME$1, __scopeCollapsible);
  const [isPresent, setIsPresent] = reactExports.useState(present);
  const ref = reactExports.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, ref);
  const heightRef = reactExports.useRef(0);
  const height = heightRef.current;
  const widthRef = reactExports.useRef(0);
  const width = widthRef.current;
  const isOpen = context.open || isPresent;
  const isMountAnimationPreventedRef = reactExports.useRef(isOpen);
  const originalStylesRef = reactExports.useRef(void 0);
  reactExports.useEffect(() => {
    const rAF = requestAnimationFrame(() => isMountAnimationPreventedRef.current = false);
    return () => cancelAnimationFrame(rAF);
  }, []);
  useLayoutEffect2(() => {
    const node = ref.current;
    if (node) {
      originalStylesRef.current = originalStylesRef.current || {
        transitionDuration: node.style.transitionDuration,
        animationName: node.style.animationName
      };
      node.style.transitionDuration = "0s";
      node.style.animationName = "none";
      const rect = node.getBoundingClientRect();
      heightRef.current = rect.height;
      widthRef.current = rect.width;
      if (!isMountAnimationPreventedRef.current) {
        node.style.transitionDuration = originalStylesRef.current.transitionDuration;
        node.style.animationName = originalStylesRef.current.animationName;
      }
      setIsPresent(present);
    }
  }, [context.open, present]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Primitive.div,
    {
      "data-state": getState$1(context.open),
      "data-disabled": context.disabled ? "" : void 0,
      id: context.contentId,
      hidden: !isOpen,
      ...contentProps,
      ref: composedRefs,
      style: {
        [`--radix-collapsible-content-height`]: height ? `${height}px` : void 0,
        [`--radix-collapsible-content-width`]: width ? `${width}px` : void 0,
        ...props.style
      },
      children: isOpen && children
    }
  );
});
function getState$1(open) {
  return open ? "open" : "closed";
}
var Root = Collapsible;
var Trigger = CollapsibleTrigger;
var Content = CollapsibleContent;
var ACCORDION_NAME = "Accordion";
var ACCORDION_KEYS = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"];
var [Collection, useCollection, createCollectionScope] = createCollection(ACCORDION_NAME);
var [createAccordionContext] = createContextScope(ACCORDION_NAME, [
  createCollectionScope,
  createCollapsibleScope
]);
var useCollapsibleScope = createCollapsibleScope();
var Accordion$1 = React.forwardRef(
  (props, forwardedRef) => {
    const { type, ...accordionProps } = props;
    const singleProps = accordionProps;
    const multipleProps = accordionProps;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Collection.Provider, { scope: props.__scopeAccordion, children: type === "multiple" ? /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionImplMultiple, { ...multipleProps, ref: forwardedRef }) : /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionImplSingle, { ...singleProps, ref: forwardedRef }) });
  }
);
Accordion$1.displayName = ACCORDION_NAME;
var [AccordionValueProvider, useAccordionValueContext] = createAccordionContext(ACCORDION_NAME);
var [AccordionCollapsibleProvider, useAccordionCollapsibleContext] = createAccordionContext(
  ACCORDION_NAME,
  { collapsible: false }
);
var AccordionImplSingle = React.forwardRef(
  (props, forwardedRef) => {
    const {
      value: valueProp,
      defaultValue,
      onValueChange = () => {
      },
      collapsible = false,
      ...accordionSingleProps
    } = props;
    const [value, setValue] = useControllableState({
      prop: valueProp,
      defaultProp: defaultValue ?? "",
      onChange: onValueChange,
      caller: ACCORDION_NAME
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      AccordionValueProvider,
      {
        scope: props.__scopeAccordion,
        value: React.useMemo(() => value ? [value] : [], [value]),
        onItemOpen: setValue,
        onItemClose: React.useCallback(() => collapsible && setValue(""), [collapsible, setValue]),
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionCollapsibleProvider, { scope: props.__scopeAccordion, collapsible, children: /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionImpl, { ...accordionSingleProps, ref: forwardedRef }) })
      }
    );
  }
);
var AccordionImplMultiple = React.forwardRef((props, forwardedRef) => {
  const {
    value: valueProp,
    defaultValue,
    onValueChange = () => {
    },
    ...accordionMultipleProps
  } = props;
  const [value, setValue] = useControllableState({
    prop: valueProp,
    defaultProp: defaultValue ?? [],
    onChange: onValueChange,
    caller: ACCORDION_NAME
  });
  const handleItemOpen = React.useCallback(
    (itemValue) => setValue((prevValue = []) => [...prevValue, itemValue]),
    [setValue]
  );
  const handleItemClose = React.useCallback(
    (itemValue) => setValue((prevValue = []) => prevValue.filter((value2) => value2 !== itemValue)),
    [setValue]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    AccordionValueProvider,
    {
      scope: props.__scopeAccordion,
      value,
      onItemOpen: handleItemOpen,
      onItemClose: handleItemClose,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionCollapsibleProvider, { scope: props.__scopeAccordion, collapsible: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionImpl, { ...accordionMultipleProps, ref: forwardedRef }) })
    }
  );
});
var [AccordionImplProvider, useAccordionContext] = createAccordionContext(ACCORDION_NAME);
var AccordionImpl = React.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAccordion, disabled, dir, orientation = "vertical", ...accordionProps } = props;
    const accordionRef = React.useRef(null);
    const composedRefs = useComposedRefs(accordionRef, forwardedRef);
    const getItems = useCollection(__scopeAccordion);
    const direction = useDirection(dir);
    const isDirectionLTR = direction === "ltr";
    const handleKeyDown = composeEventHandlers(props.onKeyDown, (event) => {
      var _a;
      if (!ACCORDION_KEYS.includes(event.key)) return;
      const target = event.target;
      const triggerCollection = getItems().filter((item) => {
        var _a2;
        return !((_a2 = item.ref.current) == null ? void 0 : _a2.disabled);
      });
      const triggerIndex = triggerCollection.findIndex((item) => item.ref.current === target);
      const triggerCount = triggerCollection.length;
      if (triggerIndex === -1) return;
      event.preventDefault();
      let nextIndex = triggerIndex;
      const homeIndex = 0;
      const endIndex = triggerCount - 1;
      const moveNext = () => {
        nextIndex = triggerIndex + 1;
        if (nextIndex > endIndex) {
          nextIndex = homeIndex;
        }
      };
      const movePrev = () => {
        nextIndex = triggerIndex - 1;
        if (nextIndex < homeIndex) {
          nextIndex = endIndex;
        }
      };
      switch (event.key) {
        case "Home":
          nextIndex = homeIndex;
          break;
        case "End":
          nextIndex = endIndex;
          break;
        case "ArrowRight":
          if (orientation === "horizontal") {
            if (isDirectionLTR) {
              moveNext();
            } else {
              movePrev();
            }
          }
          break;
        case "ArrowDown":
          if (orientation === "vertical") {
            moveNext();
          }
          break;
        case "ArrowLeft":
          if (orientation === "horizontal") {
            if (isDirectionLTR) {
              movePrev();
            } else {
              moveNext();
            }
          }
          break;
        case "ArrowUp":
          if (orientation === "vertical") {
            movePrev();
          }
          break;
      }
      const clampedIndex = nextIndex % triggerCount;
      (_a = triggerCollection[clampedIndex].ref.current) == null ? void 0 : _a.focus();
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      AccordionImplProvider,
      {
        scope: __scopeAccordion,
        disabled,
        direction: dir,
        orientation,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Collection.Slot, { scope: __scopeAccordion, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Primitive.div,
          {
            ...accordionProps,
            "data-orientation": orientation,
            ref: composedRefs,
            onKeyDown: disabled ? void 0 : handleKeyDown
          }
        ) })
      }
    );
  }
);
var ITEM_NAME = "AccordionItem";
var [AccordionItemProvider, useAccordionItemContext] = createAccordionContext(ITEM_NAME);
var AccordionItem$1 = React.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAccordion, value, ...accordionItemProps } = props;
    const accordionContext = useAccordionContext(ITEM_NAME, __scopeAccordion);
    const valueContext = useAccordionValueContext(ITEM_NAME, __scopeAccordion);
    const collapsibleScope = useCollapsibleScope(__scopeAccordion);
    const triggerId = useId();
    const open = value && valueContext.value.includes(value) || false;
    const disabled = accordionContext.disabled || props.disabled;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      AccordionItemProvider,
      {
        scope: __scopeAccordion,
        open,
        disabled,
        triggerId,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Root,
          {
            "data-orientation": accordionContext.orientation,
            "data-state": getState(open),
            ...collapsibleScope,
            ...accordionItemProps,
            ref: forwardedRef,
            disabled,
            open,
            onOpenChange: (open2) => {
              if (open2) {
                valueContext.onItemOpen(value);
              } else {
                valueContext.onItemClose(value);
              }
            }
          }
        )
      }
    );
  }
);
AccordionItem$1.displayName = ITEM_NAME;
var HEADER_NAME = "AccordionHeader";
var AccordionHeader = React.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAccordion, ...headerProps } = props;
    const accordionContext = useAccordionContext(ACCORDION_NAME, __scopeAccordion);
    const itemContext = useAccordionItemContext(HEADER_NAME, __scopeAccordion);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.h3,
      {
        "data-orientation": accordionContext.orientation,
        "data-state": getState(itemContext.open),
        "data-disabled": itemContext.disabled ? "" : void 0,
        ...headerProps,
        ref: forwardedRef
      }
    );
  }
);
AccordionHeader.displayName = HEADER_NAME;
var TRIGGER_NAME = "AccordionTrigger";
var AccordionTrigger$1 = React.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAccordion, ...triggerProps } = props;
    const accordionContext = useAccordionContext(ACCORDION_NAME, __scopeAccordion);
    const itemContext = useAccordionItemContext(TRIGGER_NAME, __scopeAccordion);
    const collapsibleContext = useAccordionCollapsibleContext(TRIGGER_NAME, __scopeAccordion);
    const collapsibleScope = useCollapsibleScope(__scopeAccordion);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Collection.ItemSlot, { scope: __scopeAccordion, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Trigger,
      {
        "aria-disabled": itemContext.open && !collapsibleContext.collapsible || void 0,
        "data-orientation": accordionContext.orientation,
        id: itemContext.triggerId,
        ...collapsibleScope,
        ...triggerProps,
        ref: forwardedRef
      }
    ) });
  }
);
AccordionTrigger$1.displayName = TRIGGER_NAME;
var CONTENT_NAME = "AccordionContent";
var AccordionContent$1 = React.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAccordion, ...contentProps } = props;
    const accordionContext = useAccordionContext(ACCORDION_NAME, __scopeAccordion);
    const itemContext = useAccordionItemContext(CONTENT_NAME, __scopeAccordion);
    const collapsibleScope = useCollapsibleScope(__scopeAccordion);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Content,
      {
        role: "region",
        "aria-labelledby": itemContext.triggerId,
        "data-orientation": accordionContext.orientation,
        ...collapsibleScope,
        ...contentProps,
        ref: forwardedRef,
        style: {
          ["--radix-accordion-content-height"]: "var(--radix-collapsible-content-height)",
          ["--radix-accordion-content-width"]: "var(--radix-collapsible-content-width)",
          ...props.style
        }
      }
    );
  }
);
AccordionContent$1.displayName = CONTENT_NAME;
function getState(open) {
  return open ? "open" : "closed";
}
var Root2 = Accordion$1;
var Item = AccordionItem$1;
var Header = AccordionHeader;
var Trigger2 = AccordionTrigger$1;
var Content2 = AccordionContent$1;
function Accordion({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Root2, { "data-slot": "accordion", ...props });
}
function AccordionItem({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Item,
    {
      "data-slot": "accordion-item",
      className: cn("border-b last:border-b-0", className),
      ...props
    }
  );
}
function AccordionTrigger({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Header, { className: "flex", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Trigger2,
    {
      "data-slot": "accordion-trigger",
      className: cn(
        "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" })
      ]
    }
  ) });
}
function AccordionContent({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Content2,
    {
      "data-slot": "accordion-content",
      className: "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm",
      ...props,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("pt-0 pb-4", className), children })
    }
  );
}
var _excluded = ["layout", "type", "stroke", "connectNulls", "isRange", "ref"], _excluded2 = ["key"];
var _Area;
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  for (var key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _callSuper(t, o, e) {
  return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
}
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t2) {
  }
  return (_isNativeReflectConstruct = function _isNativeReflectConstruct2() {
    return !!t;
  })();
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  Object.defineProperty(subClass, "prototype", { writable: false });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var Area = /* @__PURE__ */ function(_PureComponent) {
  function Area2() {
    var _this;
    _classCallCheck(this, Area2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, Area2, [].concat(args));
    _defineProperty(_this, "state", {
      isAnimationFinished: true
    });
    _defineProperty(_this, "id", uniqueId("recharts-area-"));
    _defineProperty(_this, "handleAnimationEnd", function() {
      var onAnimationEnd = _this.props.onAnimationEnd;
      _this.setState({
        isAnimationFinished: true
      });
      if (isFunction(onAnimationEnd)) {
        onAnimationEnd();
      }
    });
    _defineProperty(_this, "handleAnimationStart", function() {
      var onAnimationStart = _this.props.onAnimationStart;
      _this.setState({
        isAnimationFinished: false
      });
      if (isFunction(onAnimationStart)) {
        onAnimationStart();
      }
    });
    return _this;
  }
  _inherits(Area2, _PureComponent);
  return _createClass(Area2, [{
    key: "renderDots",
    value: function renderDots(needClip, clipDot, clipPathId) {
      var isAnimationActive = this.props.isAnimationActive;
      var isAnimationFinished = this.state.isAnimationFinished;
      if (isAnimationActive && !isAnimationFinished) {
        return null;
      }
      var _this$props = this.props, dot = _this$props.dot, points = _this$props.points, dataKey = _this$props.dataKey;
      var areaProps = filterProps(this.props, false);
      var customDotProps = filterProps(dot, true);
      var dots = points.map(function(entry, i) {
        var dotProps = _objectSpread(_objectSpread(_objectSpread({
          key: "dot-".concat(i),
          r: 3
        }, areaProps), customDotProps), {}, {
          index: i,
          cx: entry.x,
          cy: entry.y,
          dataKey,
          value: entry.value,
          payload: entry.payload,
          points
        });
        return Area2.renderDotItem(dot, dotProps);
      });
      var dotsProps = {
        clipPath: needClip ? "url(#clipPath-".concat(clipDot ? "" : "dots-").concat(clipPathId, ")") : null
      };
      return /* @__PURE__ */ React.createElement(Layer, _extends({
        className: "recharts-area-dots"
      }, dotsProps), dots);
    }
  }, {
    key: "renderHorizontalRect",
    value: function renderHorizontalRect(alpha) {
      var _this$props2 = this.props, baseLine = _this$props2.baseLine, points = _this$props2.points, strokeWidth = _this$props2.strokeWidth;
      var startX = points[0].x;
      var endX = points[points.length - 1].x;
      var width = alpha * Math.abs(startX - endX);
      var maxY = max(points.map(function(entry) {
        return entry.y || 0;
      }));
      if (isNumber(baseLine) && typeof baseLine === "number") {
        maxY = Math.max(baseLine, maxY);
      } else if (baseLine && Array.isArray(baseLine) && baseLine.length) {
        maxY = Math.max(max(baseLine.map(function(entry) {
          return entry.y || 0;
        })), maxY);
      }
      if (isNumber(maxY)) {
        return /* @__PURE__ */ React.createElement("rect", {
          x: startX < endX ? startX : startX - width,
          y: 0,
          width,
          height: Math.floor(maxY + (strokeWidth ? parseInt("".concat(strokeWidth), 10) : 1))
        });
      }
      return null;
    }
  }, {
    key: "renderVerticalRect",
    value: function renderVerticalRect(alpha) {
      var _this$props3 = this.props, baseLine = _this$props3.baseLine, points = _this$props3.points, strokeWidth = _this$props3.strokeWidth;
      var startY = points[0].y;
      var endY = points[points.length - 1].y;
      var height = alpha * Math.abs(startY - endY);
      var maxX = max(points.map(function(entry) {
        return entry.x || 0;
      }));
      if (isNumber(baseLine) && typeof baseLine === "number") {
        maxX = Math.max(baseLine, maxX);
      } else if (baseLine && Array.isArray(baseLine) && baseLine.length) {
        maxX = Math.max(max(baseLine.map(function(entry) {
          return entry.x || 0;
        })), maxX);
      }
      if (isNumber(maxX)) {
        return /* @__PURE__ */ React.createElement("rect", {
          x: 0,
          y: startY < endY ? startY : startY - height,
          width: maxX + (strokeWidth ? parseInt("".concat(strokeWidth), 10) : 1),
          height: Math.floor(height)
        });
      }
      return null;
    }
  }, {
    key: "renderClipRect",
    value: function renderClipRect(alpha) {
      var layout = this.props.layout;
      if (layout === "vertical") {
        return this.renderVerticalRect(alpha);
      }
      return this.renderHorizontalRect(alpha);
    }
  }, {
    key: "renderAreaStatically",
    value: function renderAreaStatically(points, baseLine, needClip, clipPathId) {
      var _this$props4 = this.props, layout = _this$props4.layout, type = _this$props4.type, stroke = _this$props4.stroke, connectNulls = _this$props4.connectNulls, isRange = _this$props4.isRange;
      _this$props4.ref;
      var others = _objectWithoutProperties(_this$props4, _excluded);
      return /* @__PURE__ */ React.createElement(Layer, {
        clipPath: needClip ? "url(#clipPath-".concat(clipPathId, ")") : null
      }, /* @__PURE__ */ React.createElement(Curve, _extends({}, filterProps(others, true), {
        points,
        connectNulls,
        type,
        baseLine,
        layout,
        stroke: "none",
        className: "recharts-area-area"
      })), stroke !== "none" && /* @__PURE__ */ React.createElement(Curve, _extends({}, filterProps(this.props, false), {
        className: "recharts-area-curve",
        layout,
        type,
        connectNulls,
        fill: "none",
        points
      })), stroke !== "none" && isRange && /* @__PURE__ */ React.createElement(Curve, _extends({}, filterProps(this.props, false), {
        className: "recharts-area-curve",
        layout,
        type,
        connectNulls,
        fill: "none",
        points: baseLine
      })));
    }
  }, {
    key: "renderAreaWithAnimation",
    value: function renderAreaWithAnimation(needClip, clipPathId) {
      var _this2 = this;
      var _this$props5 = this.props, points = _this$props5.points, baseLine = _this$props5.baseLine, isAnimationActive = _this$props5.isAnimationActive, animationBegin = _this$props5.animationBegin, animationDuration = _this$props5.animationDuration, animationEasing = _this$props5.animationEasing, animationId = _this$props5.animationId;
      var _this$state = this.state, prevPoints = _this$state.prevPoints, prevBaseLine = _this$state.prevBaseLine;
      return /* @__PURE__ */ React.createElement(Animate, {
        begin: animationBegin,
        duration: animationDuration,
        isActive: isAnimationActive,
        easing: animationEasing,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "area-".concat(animationId),
        onAnimationEnd: this.handleAnimationEnd,
        onAnimationStart: this.handleAnimationStart
      }, function(_ref) {
        var t = _ref.t;
        if (prevPoints) {
          var prevPointsDiffFactor = prevPoints.length / points.length;
          var stepPoints = points.map(function(entry, index) {
            var prevPointIndex = Math.floor(index * prevPointsDiffFactor);
            if (prevPoints[prevPointIndex]) {
              var prev = prevPoints[prevPointIndex];
              var interpolatorX = interpolateNumber(prev.x, entry.x);
              var interpolatorY = interpolateNumber(prev.y, entry.y);
              return _objectSpread(_objectSpread({}, entry), {}, {
                x: interpolatorX(t),
                y: interpolatorY(t)
              });
            }
            return entry;
          });
          var stepBaseLine;
          if (isNumber(baseLine) && typeof baseLine === "number") {
            var interpolator = interpolateNumber(prevBaseLine, baseLine);
            stepBaseLine = interpolator(t);
          } else if (isNil(baseLine) || isNan(baseLine)) {
            var _interpolator = interpolateNumber(prevBaseLine, 0);
            stepBaseLine = _interpolator(t);
          } else {
            stepBaseLine = baseLine.map(function(entry, index) {
              var prevPointIndex = Math.floor(index * prevPointsDiffFactor);
              if (prevBaseLine[prevPointIndex]) {
                var prev = prevBaseLine[prevPointIndex];
                var interpolatorX = interpolateNumber(prev.x, entry.x);
                var interpolatorY = interpolateNumber(prev.y, entry.y);
                return _objectSpread(_objectSpread({}, entry), {}, {
                  x: interpolatorX(t),
                  y: interpolatorY(t)
                });
              }
              return entry;
            });
          }
          return _this2.renderAreaStatically(stepPoints, stepBaseLine, needClip, clipPathId);
        }
        return /* @__PURE__ */ React.createElement(Layer, null, /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", {
          id: "animationClipPath-".concat(clipPathId)
        }, _this2.renderClipRect(t))), /* @__PURE__ */ React.createElement(Layer, {
          clipPath: "url(#animationClipPath-".concat(clipPathId, ")")
        }, _this2.renderAreaStatically(points, baseLine, needClip, clipPathId)));
      });
    }
  }, {
    key: "renderArea",
    value: function renderArea(needClip, clipPathId) {
      var _this$props6 = this.props, points = _this$props6.points, baseLine = _this$props6.baseLine, isAnimationActive = _this$props6.isAnimationActive;
      var _this$state2 = this.state, prevPoints = _this$state2.prevPoints, prevBaseLine = _this$state2.prevBaseLine, totalLength = _this$state2.totalLength;
      if (isAnimationActive && points && points.length && (!prevPoints && totalLength > 0 || !isEqual(prevPoints, points) || !isEqual(prevBaseLine, baseLine))) {
        return this.renderAreaWithAnimation(needClip, clipPathId);
      }
      return this.renderAreaStatically(points, baseLine, needClip, clipPathId);
    }
  }, {
    key: "render",
    value: function render() {
      var _filterProps;
      var _this$props7 = this.props, hide = _this$props7.hide, dot = _this$props7.dot, points = _this$props7.points, className = _this$props7.className, top = _this$props7.top, left = _this$props7.left, xAxis = _this$props7.xAxis, yAxis = _this$props7.yAxis, width = _this$props7.width, height = _this$props7.height, isAnimationActive = _this$props7.isAnimationActive, id = _this$props7.id;
      if (hide || !points || !points.length) {
        return null;
      }
      var isAnimationFinished = this.state.isAnimationFinished;
      var hasSinglePoint = points.length === 1;
      var layerClass = clsx("recharts-area", className);
      var needClipX = xAxis && xAxis.allowDataOverflow;
      var needClipY = yAxis && yAxis.allowDataOverflow;
      var needClip = needClipX || needClipY;
      var clipPathId = isNil(id) ? this.id : id;
      var _ref2 = (_filterProps = filterProps(dot, false)) !== null && _filterProps !== void 0 ? _filterProps : {
        r: 3,
        strokeWidth: 2
      }, _ref2$r = _ref2.r, r = _ref2$r === void 0 ? 3 : _ref2$r, _ref2$strokeWidth = _ref2.strokeWidth, strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
      var _ref3 = hasClipDot(dot) ? dot : {}, _ref3$clipDot = _ref3.clipDot, clipDot = _ref3$clipDot === void 0 ? true : _ref3$clipDot;
      var dotSize = r * 2 + strokeWidth;
      return /* @__PURE__ */ React.createElement(Layer, {
        className: layerClass
      }, needClipX || needClipY ? /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", {
        id: "clipPath-".concat(clipPathId)
      }, /* @__PURE__ */ React.createElement("rect", {
        x: needClipX ? left : left - width / 2,
        y: needClipY ? top : top - height / 2,
        width: needClipX ? width : width * 2,
        height: needClipY ? height : height * 2
      })), !clipDot && /* @__PURE__ */ React.createElement("clipPath", {
        id: "clipPath-dots-".concat(clipPathId)
      }, /* @__PURE__ */ React.createElement("rect", {
        x: left - dotSize / 2,
        y: top - dotSize / 2,
        width: width + dotSize,
        height: height + dotSize
      }))) : null, !hasSinglePoint ? this.renderArea(needClip, clipPathId) : null, (dot || hasSinglePoint) && this.renderDots(needClip, clipDot, clipPathId), (!isAnimationActive || isAnimationFinished) && LabelList.renderCallByParent(this.props, points));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.animationId !== prevState.prevAnimationId) {
        return {
          prevAnimationId: nextProps.animationId,
          curPoints: nextProps.points,
          curBaseLine: nextProps.baseLine,
          prevPoints: prevState.curPoints,
          prevBaseLine: prevState.curBaseLine
        };
      }
      if (nextProps.points !== prevState.curPoints || nextProps.baseLine !== prevState.curBaseLine) {
        return {
          curPoints: nextProps.points,
          curBaseLine: nextProps.baseLine
        };
      }
      return null;
    }
  }]);
}(reactExports.PureComponent);
_Area = Area;
_defineProperty(Area, "displayName", "Area");
_defineProperty(Area, "defaultProps", {
  stroke: "#3182bd",
  fill: "#3182bd",
  fillOpacity: 0.6,
  xAxisId: 0,
  yAxisId: 0,
  legendType: "line",
  connectNulls: false,
  // points of area
  points: [],
  dot: false,
  activeDot: true,
  hide: false,
  isAnimationActive: !Global.isSsr,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
});
_defineProperty(Area, "getBaseValue", function(props, item, xAxis, yAxis) {
  var layout = props.layout, chartBaseValue = props.baseValue;
  var itemBaseValue = item.props.baseValue;
  var baseValue = itemBaseValue !== null && itemBaseValue !== void 0 ? itemBaseValue : chartBaseValue;
  if (isNumber(baseValue) && typeof baseValue === "number") {
    return baseValue;
  }
  var numericAxis = layout === "horizontal" ? yAxis : xAxis;
  var domain = numericAxis.scale.domain();
  if (numericAxis.type === "number") {
    var domainMax = Math.max(domain[0], domain[1]);
    var domainMin = Math.min(domain[0], domain[1]);
    if (baseValue === "dataMin") {
      return domainMin;
    }
    if (baseValue === "dataMax") {
      return domainMax;
    }
    return domainMax < 0 ? domainMax : Math.max(Math.min(domain[0], domain[1]), 0);
  }
  if (baseValue === "dataMin") {
    return domain[0];
  }
  if (baseValue === "dataMax") {
    return domain[1];
  }
  return domain[0];
});
_defineProperty(Area, "getComposedData", function(_ref4) {
  var props = _ref4.props, item = _ref4.item, xAxis = _ref4.xAxis, yAxis = _ref4.yAxis, xAxisTicks = _ref4.xAxisTicks, yAxisTicks = _ref4.yAxisTicks, bandSize = _ref4.bandSize, dataKey = _ref4.dataKey, stackedData = _ref4.stackedData, dataStartIndex = _ref4.dataStartIndex, displayedData = _ref4.displayedData, offset = _ref4.offset;
  var layout = props.layout;
  var hasStack = stackedData && stackedData.length;
  var baseValue = _Area.getBaseValue(props, item, xAxis, yAxis);
  var isHorizontalLayout = layout === "horizontal";
  var isRange = false;
  var points = displayedData.map(function(entry, index) {
    var value;
    if (hasStack) {
      value = stackedData[dataStartIndex + index];
    } else {
      value = getValueByDataKey(entry, dataKey);
      if (!Array.isArray(value)) {
        value = [baseValue, value];
      } else {
        isRange = true;
      }
    }
    var isBreakPoint = value[1] == null || hasStack && getValueByDataKey(entry, dataKey) == null;
    if (isHorizontalLayout) {
      return {
        x: getCateCoordinateOfLine({
          axis: xAxis,
          ticks: xAxisTicks,
          bandSize,
          entry,
          index
        }),
        y: isBreakPoint ? null : yAxis.scale(value[1]),
        value,
        payload: entry
      };
    }
    return {
      x: isBreakPoint ? null : xAxis.scale(value[1]),
      y: getCateCoordinateOfLine({
        axis: yAxis,
        ticks: yAxisTicks,
        bandSize,
        entry,
        index
      }),
      value,
      payload: entry
    };
  });
  var baseLine;
  if (hasStack || isRange) {
    baseLine = points.map(function(entry) {
      var x = Array.isArray(entry.value) ? entry.value[0] : null;
      if (isHorizontalLayout) {
        return {
          x: entry.x,
          y: x != null && entry.y != null ? yAxis.scale(x) : null
        };
      }
      return {
        x: x != null ? xAxis.scale(x) : null,
        y: entry.y
      };
    });
  } else {
    baseLine = isHorizontalLayout ? yAxis.scale(baseValue) : xAxis.scale(baseValue);
  }
  return _objectSpread({
    points,
    baseLine,
    layout,
    isRange
  }, offset);
});
_defineProperty(Area, "renderDotItem", function(option, props) {
  var dotItem;
  if (/* @__PURE__ */ React.isValidElement(option)) {
    dotItem = /* @__PURE__ */ React.cloneElement(option, props);
  } else if (isFunction(option)) {
    dotItem = option(props);
  } else {
    var className = clsx("recharts-area-dot", typeof option !== "boolean" ? option.className : "");
    var key = props.key, rest = _objectWithoutProperties(props, _excluded2);
    dotItem = /* @__PURE__ */ React.createElement(Dot, _extends({}, rest, {
      key,
      className
    }));
  }
  return dotItem;
});
var AreaChart = generateCategoricalChart({
  chartName: "AreaChart",
  GraphicalChild: Area,
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: XAxis
  }, {
    axisType: "yAxis",
    AxisComp: YAxis
  }],
  formatAxisMap
});
const dashboardCards = [
  {
    icon: Wallet,
    title: "Budgeting",
    subtitle: "Track every rupee",
    description: "Learn the 50/30/20 rule and manage monthly expenses effectively.",
    to: "/tools/budget",
    color: "text-primary",
    bg: "bg-blue-100 dark:bg-blue-900/30",
    chartData: [
      { name: "Needs", v: 50 },
      { name: "Wants", v: 30 },
      { name: "Save", v: 20 }
    ],
    chartType: "bar"
  },
  {
    icon: BookOpen,
    title: "Saving",
    subtitle: "Build your corpus",
    description: "Understand FDs, RDs, PPF, and how small savings compound over time.",
    to: "/about",
    color: "text-green-600 dark:text-green-400",
    bg: "bg-green-100 dark:bg-green-900/30",
    chartData: [
      { v: 10 },
      { v: 15 },
      { v: 18 },
      { v: 22 },
      { v: 28 },
      { v: 35 },
      { v: 45 }
    ],
    chartType: "line"
  },
  {
    icon: Calculator,
    title: "Investing",
    subtitle: "Grow your wealth",
    description: "Explore equity, mutual funds, SIPs, and long-term wealth creation.",
    to: "/tools/investment",
    color: "text-purple-600 dark:text-purple-400",
    bg: "bg-purple-100 dark:bg-purple-900/30",
    chartData: [
      { v: 100 },
      { v: 110 },
      { v: 125 },
      { v: 140 },
      { v: 165 },
      { v: 195 },
      { v: 240 }
    ],
    chartType: "line"
  }
];
const hubCards = [
  {
    icon: Wallet,
    title: "Budget Basics",
    desc: "Master expense tracking and the 50/30/20 rule for financial balance.",
    to: "/tools/budget"
  },
  {
    icon: Calculator,
    title: "Understanding SIPs",
    desc: "Systematic Investment Plans — the power of disciplined, recurring investment.",
    to: "/tools/investment"
  },
  {
    icon: Building2,
    title: "Government Schemes",
    desc: "Explore PMJDY, APY, PMJJBY and other benefits designed for all Indians.",
    to: "/schemes"
  },
  {
    icon: FileText,
    title: "Tax Planning",
    desc: "Section 80C, ELSS, HRA, and other tools to legally minimize your tax liability.",
    to: "/about"
  }
];
function FeatureCards() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl md:text-3xl font-bold text-foreground mb-2", children: "Your Financial Dashboard" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Three pillars of personal financial health" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-6", children: dashboardCards.map((card, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.4, delay: i * 0.1 },
          viewport: { once: true },
          className: "bg-card border border-border rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-200 group",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `inline-flex rounded-xl p-3 mb-4 ${card.bg}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(card.icon, { className: `h-6 w-6 ${card.color}` }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-lg text-foreground mb-1", children: card.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-2", children: card.subtitle }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed mb-4", children: card.description }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-24 mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: "100%", children: card.chartType === "bar" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(BarChart, { data: card.chartData, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "name", tick: { fontSize: 10 } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { hide: true }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { formatter: (v) => [`${v}%`, ""] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "v", fill: "#2563EB", radius: [3, 3, 0, 0] })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(LineChart, { data: card.chartData, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { hide: true }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Line,
                {
                  type: "monotone",
                  dataKey: "v",
                  stroke: i === 1 ? "#10B981" : "#8B5CF6",
                  strokeWidth: 2,
                  dot: false
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { formatter: (v) => [v, "Value"] })
            ] }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: card.to,
                className: `inline-flex items-center gap-1 text-sm font-semibold ${card.color} hover:gap-2 transition-all`,
                children: [
                  "Learn More ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
                ]
              }
            )
          ]
        },
        card.title
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-slate-50 dark:bg-accent/20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl md:text-3xl font-bold text-foreground mb-2", children: "Financial Literacy Hub" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Comprehensive resources to guide your financial journey" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-5", children: hubCards.map((card, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.4, delay: i * 0.1 },
          viewport: { once: true },
          className: "bg-card border border-border rounded-xl p-5 shadow-card hover:shadow-card-hover transition-all duration-200 group",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-primary/10 rounded-xl p-3 w-fit mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(card.icon, { className: "h-5 w-5 text-primary" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground mb-2", children: card.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed mb-4", children: card.desc }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: card.to,
                className: "inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all",
                children: [
                  "Learn More ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
                ]
              }
            )
          ]
        },
        card.title
      )) })
    ] }) })
  ] });
}
const heroChartData = [
  { v: 20 },
  { v: 25 },
  { v: 22 },
  { v: 35 },
  { v: 32 },
  { v: 45 },
  { v: 48 },
  { v: 55 },
  { v: 60 },
  { v: 75 }
];
function HeroSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative bg-white dark:bg-background overflow-hidden min-h-[90vh] flex items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 overflow-hidden pointer-events-none", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-32 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-16 -left-16 w-64 h-64 bg-primary/3 rounded-full blur-2xl" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-semibold px-3 py-1.5 rounded-full mb-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 bg-primary rounded-full animate-pulse" }),
              "Financial Literacy for Every Indian"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-4xl md:text-5xl lg:text-[3.2rem] font-bold text-foreground leading-tight mb-6", children: [
              "Master Your Finances.",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "Secure Your Future." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg leading-relaxed mb-8 max-w-lg", children: "Understand budgeting, investing, and government schemes designed for India. Build wealth with knowledge \\u2014 from savings to SIPs, we cover it all." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  "data-ocid": "hero.primary_button",
                  asChild: true,
                  size: "lg",
                  className: "font-semibold",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/tools/budget", children: [
                    "Explore Tools ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 h-5 w-5" })
                  ] })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  "data-ocid": "hero.secondary_button",
                  asChild: true,
                  variant: "outline",
                  size: "lg",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", children: "Learn More" })
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 flex items-center gap-8", children: [
              { label: "Learners", value: "50K+" },
              { label: "Schemes Covered", value: "6+" },
              { label: "Quiz Attempts", value: "10K+" }
            ].map((stat) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-2xl text-foreground", children: stat.value }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground text-xs", children: stat.label })
            ] }, stat.label)) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.95 },
          animate: { opacity: 1, scale: 1 },
          transition: { duration: 0.7, delay: 0.2 },
          className: "hidden lg:block",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-navy-dark rounded-2xl p-6 text-white shadow-2xl", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/70 text-sm", children: "Portfolio Growth" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-green-500/20 text-green-400 text-xs font-semibold px-2 py-0.5 rounded-full", children: "+18.4%" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl font-bold mb-1", children: "\\u20B94,82,500" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/60 text-sm mb-4", children: "Total Investment Value" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 100, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AreaChart, { data: heroChartData, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "heroGrad", x1: "0", y1: "0", x2: "0", y2: "1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "stop",
                    {
                      offset: "5%",
                      stopColor: "#2563EB",
                      stopOpacity: 0.4
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "stop",
                    {
                      offset: "95%",
                      stopColor: "#2563EB",
                      stopOpacity: 0
                    }
                  )
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Area,
                  {
                    type: "monotone",
                    dataKey: "v",
                    stroke: "#2563EB",
                    fill: "url(#heroGrad)",
                    strokeWidth: 2,
                    dot: false
                  }
                )
              ] }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-4 -right-4 bg-card border border-border rounded-xl p-3 shadow-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-green-100 dark:bg-green-900/40 rounded-lg p-1.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-4 w-4 text-green-600" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-foreground text-sm", children: "GDP Growth" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-green-600 text-xs font-bold", children: "7.2%" })
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-4 -left-4 bg-card border border-border rounded-xl p-3 shadow-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-blue-100 dark:bg-blue-900/40 rounded-lg p-1.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "h-4 w-4 text-primary" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-foreground text-sm", children: "Insured" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary text-xs", children: "37Cr+ enrolled" })
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/2 -right-6 transform -translate-y-1/2 bg-card border border-border rounded-xl p-3 shadow-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-orange-100 dark:bg-orange-900/40 rounded-lg p-1.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PiggyBank, { className: "h-4 w-4 text-orange-500" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-foreground text-sm", children: "SIP" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-orange-500 text-xs", children: "\\u20B9500/month" })
              ] })
            ] }) })
          ] })
        }
      )
    ] }) })
  ] });
}
const STATS = [
  {
    label: "Inflation Rate",
    value: "5.7%",
    change: "-0.3%",
    positive: true,
    Icon: TrendingDown,
    color: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400"
  },
  {
    label: "GDP Growth",
    value: "7.2%",
    change: "+0.8%",
    positive: true,
    Icon: TrendingUp,
    color: "bg-blue-100 dark:bg-blue-900/30 text-primary"
  },
  {
    label: "Financial Inclusion",
    value: "80%",
    change: "+3%",
    positive: true,
    Icon: Users,
    color: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400"
  },
  {
    label: "Literacy Rate",
    value: "76.9%",
    change: "+2.1%",
    positive: true,
    Icon: BookOpen,
    color: "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400"
  }
];
function StatsCards() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-slate-50 dark:bg-accent/20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl md:text-3xl font-bold text-foreground mb-2", children: "Key India Statistics" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Real-time economic indicators shaping India's financial landscape" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-4", children: STATS.map((stat, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.4, delay: i * 0.1 },
        viewport: { once: true },
        "data-ocid": `stats.card.${i + 1}`,
        className: "bg-card border border-border rounded-xl p-5 shadow-card hover:shadow-card-hover transition-all duration-200",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `inline-flex rounded-lg p-2 mb-3 ${stat.color}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(stat.Icon, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl md:text-3xl font-bold text-foreground", children: stat.value }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground text-sm mt-0.5", children: stat.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: `text-xs font-semibold mt-2 ${stat.positive ? "text-green-600 dark:text-green-400" : "text-red-500"}`,
              children: [
                stat.change,
                " from last year"
              ]
            }
          )
        ]
      },
      stat.label
    )) })
  ] }) });
}
const FAQ_ITEMS = [
  {
    id: "faq-1",
    q: "What is financial literacy and why is it important for Indians?",
    a: "Financial literacy is the ability to understand and effectively use financial skills, including personal financial management, budgeting, and investing. For Indians, it's crucial because only 27% of adults are financially literate (per S&P survey), leading to poor savings habits, vulnerability to scams, and missed opportunities from government schemes."
  },
  {
    id: "faq-2",
    q: "What is the 50/30/20 rule and how can it help manage my salary?",
    a: "The 50/30/20 rule is a simple budgeting framework: allocate 50% of your take-home income to needs (rent, groceries, EMIs), 30% to wants (dining, travel, entertainment), and 20% to savings and debt repayment. For a ₹50,000 monthly salary, that means ₹25,000 for needs, ₹15,000 for wants, and ₹10,000 for savings."
  },
  {
    id: "faq-3",
    q: "How does a SIP work and is it better than a lump sum investment?",
    a: "A Systematic Investment Plan (SIP) invests a fixed amount regularly (monthly) in mutual funds, enabling rupee-cost averaging — buying more units when markets are down and fewer when they're up. SIPs reduce market-timing risk and are ideal for salaried individuals. Lump sum works better if you have a large surplus during a market dip."
  },
  {
    id: "faq-4",
    q: "Which government schemes are most beneficial for a middle-class family?",
    a: "For middle-class families: PMJJBY (life insurance at ₹436/year), PMSBY (accident cover at ₹20/year), APY (pension guarantee), and PMJDY (zero-balance bank account with RuPay card). Combined, these provide comprehensive financial safety net coverage for under ₹500/year per family member."
  },
  {
    id: "faq-5",
    q: "How can I start investing with just ₹500 per month?",
    a: "Start with ELSS mutual funds or index funds via SIP at ₹500/month. In 20 years at 12% CAGR, ₹500/month becomes approximately ₹4.99 lakh. Use SEBI-registered platforms, complete your KYC with Aadhaar/PAN, and link your bank account. Platforms like Zerodha Coin, Groww, or Paytm Money allow ₹100 minimum SIPs."
  },
  {
    id: "faq-6",
    q: "What documents do I need for most government financial schemes?",
    a: "Most schemes require: Aadhaar card (identity and address proof), PAN card (for investments and tax), active savings bank account, mobile number linked to Aadhaar, and passport-size photographs. For APY and PMJJBY/PMSBY, you also need to provide consent for annual auto-debit from your bank account."
  }
];
function Home() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(HeroSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StatsCards, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FeatureCards, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.5 },
          viewport: { once: true },
          className: "text-center mb-10",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl md:text-3xl font-bold text-foreground mb-2", children: "Frequently Asked Questions" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Quick answers to common financial questions" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Accordion, { type: "single", collapsible: true, className: "space-y-3", children: FAQ_ITEMS.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        AccordionItem,
        {
          value: item.id,
          className: "bg-card border border-border rounded-xl px-5 shadow-card",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionTrigger, { className: "text-left font-semibold text-foreground text-sm py-4 hover:no-underline", children: item.q }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionContent, { className: "text-muted-foreground text-sm pb-4 leading-relaxed", children: item.a })
          ]
        },
        item.id
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-navy-dark", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl font-bold text-white mb-4", children: "Ready to Test Your Financial Knowledge?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/70 mb-8 max-w-lg mx-auto", children: "Take our 15-question quiz covering banking, investments, insurance, and government schemes." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 justify-center flex-wrap", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "/quiz",
            className: "bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors",
            children: "Take the Quiz"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "/schemes",
            className: "bg-white/10 text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-colors border border-white/20",
            children: "View Schemes"
          }
        )
      ] })
    ] }) })
  ] });
}
export {
  Home as default
};
