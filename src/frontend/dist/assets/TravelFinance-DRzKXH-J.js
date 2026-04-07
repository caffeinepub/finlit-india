import { n as createLucideIcon, r as reactExports, j as jsxRuntimeExports, P as Primitive, D as createPopperScope, h as useDirection, u as useControllableState, E as Root2$1, c as createContextScope, a as useId, g as createCollection, e as useComposedRefs, F as Anchor, b as composeEventHandlers, f as useLayoutEffect2, H as Portal$1, J as reactDomExports, K as useCallbackRef, M as hideOthers, N as useFocusGuards, O as ReactRemoveScroll, Q as createSlot, V as FocusScope, W as DismissableLayer, X as Content, Y as Arrow, i as cn, C as ChevronDown, l as Button, p as ue } from "./index-C2gTZAc5.js";
import { B as Badge } from "./badge-BFqE_O3a.js";
import { C as Card, a as CardContent } from "./card-AqaI2WJn.js";
import { I as Input } from "./input-D-QuSoeY.js";
import { L as Label } from "./label-BZQkoq3e.js";
import { u as usePrevious, c as clamp } from "./index-VhMS8pNo.js";
import { C as ChevronUp } from "./chevron-up-BJz1C9CL.js";
import { P as PageHeader } from "./PageHeader-CAZihj1C.js";
import { m as motion } from "./proxy-B5X-98y1.js";
import { C as CircleAlert } from "./circle-alert-Bpz-F4Uj.js";
import { G as Globe } from "./globe-CswWswR7.js";
import { C as Calculator } from "./calculator-PAzjxQlZ.js";
import { S as Save } from "./save-lhJqoTRz.js";
import { A as AnimatePresence } from "./index-CTLgEGOJ.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$4 = [
  ["path", { d: "M8 3 4 7l4 4", key: "9rb6wj" }],
  ["path", { d: "M4 7h16", key: "6tx8e3" }],
  ["path", { d: "m16 21 4-4-4-4", key: "siv7j2" }],
  ["path", { d: "M20 17H4", key: "h6l3hr" }]
];
const ArrowLeftRight = createLucideIcon("arrow-left-right", __iconNode$4);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]];
const Check = createLucideIcon("check", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  [
    "path",
    {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky"
    }
  ]
];
const Heart = createLucideIcon("heart", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]];
const LoaderCircle = createLucideIcon("loader-circle", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
];
const RefreshCw = createLucideIcon("refresh-cw", __iconNode);
var VISUALLY_HIDDEN_STYLES = Object.freeze({
  // See: https://github.com/twbs/bootstrap/blob/main/scss/mixins/_visually-hidden.scss
  position: "absolute",
  border: 0,
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  wordWrap: "normal"
});
var NAME$1 = "VisuallyHidden";
var VisuallyHidden = reactExports.forwardRef(
  (props, forwardedRef) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.span,
      {
        ...props,
        ref: forwardedRef,
        style: { ...VISUALLY_HIDDEN_STYLES, ...props.style }
      }
    );
  }
);
VisuallyHidden.displayName = NAME$1;
var OPEN_KEYS = [" ", "Enter", "ArrowUp", "ArrowDown"];
var SELECTION_KEYS = [" ", "Enter"];
var SELECT_NAME = "Select";
var [Collection, useCollection, createCollectionScope] = createCollection(SELECT_NAME);
var [createSelectContext] = createContextScope(SELECT_NAME, [
  createCollectionScope,
  createPopperScope
]);
var usePopperScope = createPopperScope();
var [SelectProvider, useSelectContext] = createSelectContext(SELECT_NAME);
var [SelectNativeOptionsProvider, useSelectNativeOptionsContext] = createSelectContext(SELECT_NAME);
var Select$1 = (props) => {
  const {
    __scopeSelect,
    children,
    open: openProp,
    defaultOpen,
    onOpenChange,
    value: valueProp,
    defaultValue,
    onValueChange,
    dir,
    name,
    autoComplete,
    disabled,
    required,
    form
  } = props;
  const popperScope = usePopperScope(__scopeSelect);
  const [trigger, setTrigger] = reactExports.useState(null);
  const [valueNode, setValueNode] = reactExports.useState(null);
  const [valueNodeHasChildren, setValueNodeHasChildren] = reactExports.useState(false);
  const direction = useDirection(dir);
  const [open, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen ?? false,
    onChange: onOpenChange,
    caller: SELECT_NAME
  });
  const [value, setValue] = useControllableState({
    prop: valueProp,
    defaultProp: defaultValue,
    onChange: onValueChange,
    caller: SELECT_NAME
  });
  const triggerPointerDownPosRef = reactExports.useRef(null);
  const isFormControl = trigger ? form || !!trigger.closest("form") : true;
  const [nativeOptionsSet, setNativeOptionsSet] = reactExports.useState(/* @__PURE__ */ new Set());
  const nativeSelectKey = Array.from(nativeOptionsSet).map((option) => option.props.value).join(";");
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Root2$1, { ...popperScope, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    SelectProvider,
    {
      required,
      scope: __scopeSelect,
      trigger,
      onTriggerChange: setTrigger,
      valueNode,
      onValueNodeChange: setValueNode,
      valueNodeHasChildren,
      onValueNodeHasChildrenChange: setValueNodeHasChildren,
      contentId: useId(),
      value,
      onValueChange: setValue,
      open,
      onOpenChange: setOpen,
      dir: direction,
      triggerPointerDownPosRef,
      disabled,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Collection.Provider, { scope: __scopeSelect, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          SelectNativeOptionsProvider,
          {
            scope: props.__scopeSelect,
            onNativeOptionAdd: reactExports.useCallback((option) => {
              setNativeOptionsSet((prev) => new Set(prev).add(option));
            }, []),
            onNativeOptionRemove: reactExports.useCallback((option) => {
              setNativeOptionsSet((prev) => {
                const optionsSet = new Set(prev);
                optionsSet.delete(option);
                return optionsSet;
              });
            }, []),
            children
          }
        ) }),
        isFormControl ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
          SelectBubbleInput,
          {
            "aria-hidden": true,
            required,
            tabIndex: -1,
            name,
            autoComplete,
            value,
            onChange: (event) => setValue(event.target.value),
            disabled,
            form,
            children: [
              value === void 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "" }) : null,
              Array.from(nativeOptionsSet)
            ]
          },
          nativeSelectKey
        ) : null
      ]
    }
  ) });
};
Select$1.displayName = SELECT_NAME;
var TRIGGER_NAME = "SelectTrigger";
var SelectTrigger$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeSelect, disabled = false, ...triggerProps } = props;
    const popperScope = usePopperScope(__scopeSelect);
    const context = useSelectContext(TRIGGER_NAME, __scopeSelect);
    const isDisabled = context.disabled || disabled;
    const composedRefs = useComposedRefs(forwardedRef, context.onTriggerChange);
    const getItems = useCollection(__scopeSelect);
    const pointerTypeRef = reactExports.useRef("touch");
    const [searchRef, handleTypeaheadSearch, resetTypeahead] = useTypeaheadSearch((search) => {
      const enabledItems = getItems().filter((item) => !item.disabled);
      const currentItem = enabledItems.find((item) => item.value === context.value);
      const nextItem = findNextItem(enabledItems, search, currentItem);
      if (nextItem !== void 0) {
        context.onValueChange(nextItem.value);
      }
    });
    const handleOpen = (pointerEvent) => {
      if (!isDisabled) {
        context.onOpenChange(true);
        resetTypeahead();
      }
      if (pointerEvent) {
        context.triggerPointerDownPosRef.current = {
          x: Math.round(pointerEvent.pageX),
          y: Math.round(pointerEvent.pageY)
        };
      }
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Anchor, { asChild: true, ...popperScope, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.button,
      {
        type: "button",
        role: "combobox",
        "aria-controls": context.contentId,
        "aria-expanded": context.open,
        "aria-required": context.required,
        "aria-autocomplete": "none",
        dir: context.dir,
        "data-state": context.open ? "open" : "closed",
        disabled: isDisabled,
        "data-disabled": isDisabled ? "" : void 0,
        "data-placeholder": shouldShowPlaceholder(context.value) ? "" : void 0,
        ...triggerProps,
        ref: composedRefs,
        onClick: composeEventHandlers(triggerProps.onClick, (event) => {
          event.currentTarget.focus();
          if (pointerTypeRef.current !== "mouse") {
            handleOpen(event);
          }
        }),
        onPointerDown: composeEventHandlers(triggerProps.onPointerDown, (event) => {
          pointerTypeRef.current = event.pointerType;
          const target = event.target;
          if (target.hasPointerCapture(event.pointerId)) {
            target.releasePointerCapture(event.pointerId);
          }
          if (event.button === 0 && event.ctrlKey === false && event.pointerType === "mouse") {
            handleOpen(event);
            event.preventDefault();
          }
        }),
        onKeyDown: composeEventHandlers(triggerProps.onKeyDown, (event) => {
          const isTypingAhead = searchRef.current !== "";
          const isModifierKey = event.ctrlKey || event.altKey || event.metaKey;
          if (!isModifierKey && event.key.length === 1) handleTypeaheadSearch(event.key);
          if (isTypingAhead && event.key === " ") return;
          if (OPEN_KEYS.includes(event.key)) {
            handleOpen();
            event.preventDefault();
          }
        })
      }
    ) });
  }
);
SelectTrigger$1.displayName = TRIGGER_NAME;
var VALUE_NAME = "SelectValue";
var SelectValue$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeSelect, className, style, children, placeholder = "", ...valueProps } = props;
    const context = useSelectContext(VALUE_NAME, __scopeSelect);
    const { onValueNodeHasChildrenChange } = context;
    const hasChildren = children !== void 0;
    const composedRefs = useComposedRefs(forwardedRef, context.onValueNodeChange);
    useLayoutEffect2(() => {
      onValueNodeHasChildrenChange(hasChildren);
    }, [onValueNodeHasChildrenChange, hasChildren]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.span,
      {
        ...valueProps,
        ref: composedRefs,
        style: { pointerEvents: "none" },
        children: shouldShowPlaceholder(context.value) ? /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: placeholder }) : children
      }
    );
  }
);
SelectValue$1.displayName = VALUE_NAME;
var ICON_NAME = "SelectIcon";
var SelectIcon = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeSelect, children, ...iconProps } = props;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Primitive.span, { "aria-hidden": true, ...iconProps, ref: forwardedRef, children: children || "▼" });
  }
);
SelectIcon.displayName = ICON_NAME;
var PORTAL_NAME = "SelectPortal";
var SelectPortal = (props) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Portal$1, { asChild: true, ...props });
};
SelectPortal.displayName = PORTAL_NAME;
var CONTENT_NAME = "SelectContent";
var SelectContent$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const context = useSelectContext(CONTENT_NAME, props.__scopeSelect);
    const [fragment, setFragment] = reactExports.useState();
    useLayoutEffect2(() => {
      setFragment(new DocumentFragment());
    }, []);
    if (!context.open) {
      const frag = fragment;
      return frag ? reactDomExports.createPortal(
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContentProvider, { scope: props.__scopeSelect, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Collection.Slot, { scope: props.__scopeSelect, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: props.children }) }) }),
        frag
      ) : null;
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContentImpl, { ...props, ref: forwardedRef });
  }
);
SelectContent$1.displayName = CONTENT_NAME;
var CONTENT_MARGIN = 10;
var [SelectContentProvider, useSelectContentContext] = createSelectContext(CONTENT_NAME);
var CONTENT_IMPL_NAME = "SelectContentImpl";
var Slot = createSlot("SelectContent.RemoveScroll");
var SelectContentImpl = reactExports.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeSelect,
      position = "item-aligned",
      onCloseAutoFocus,
      onEscapeKeyDown,
      onPointerDownOutside,
      //
      // PopperContent props
      side,
      sideOffset,
      align,
      alignOffset,
      arrowPadding,
      collisionBoundary,
      collisionPadding,
      sticky,
      hideWhenDetached,
      avoidCollisions,
      //
      ...contentProps
    } = props;
    const context = useSelectContext(CONTENT_NAME, __scopeSelect);
    const [content, setContent] = reactExports.useState(null);
    const [viewport, setViewport] = reactExports.useState(null);
    const composedRefs = useComposedRefs(forwardedRef, (node) => setContent(node));
    const [selectedItem, setSelectedItem] = reactExports.useState(null);
    const [selectedItemText, setSelectedItemText] = reactExports.useState(
      null
    );
    const getItems = useCollection(__scopeSelect);
    const [isPositioned, setIsPositioned] = reactExports.useState(false);
    const firstValidItemFoundRef = reactExports.useRef(false);
    reactExports.useEffect(() => {
      if (content) return hideOthers(content);
    }, [content]);
    useFocusGuards();
    const focusFirst = reactExports.useCallback(
      (candidates) => {
        const [firstItem, ...restItems] = getItems().map((item) => item.ref.current);
        const [lastItem] = restItems.slice(-1);
        const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
        for (const candidate of candidates) {
          if (candidate === PREVIOUSLY_FOCUSED_ELEMENT) return;
          candidate == null ? void 0 : candidate.scrollIntoView({ block: "nearest" });
          if (candidate === firstItem && viewport) viewport.scrollTop = 0;
          if (candidate === lastItem && viewport) viewport.scrollTop = viewport.scrollHeight;
          candidate == null ? void 0 : candidate.focus();
          if (document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT) return;
        }
      },
      [getItems, viewport]
    );
    const focusSelectedItem = reactExports.useCallback(
      () => focusFirst([selectedItem, content]),
      [focusFirst, selectedItem, content]
    );
    reactExports.useEffect(() => {
      if (isPositioned) {
        focusSelectedItem();
      }
    }, [isPositioned, focusSelectedItem]);
    const { onOpenChange, triggerPointerDownPosRef } = context;
    reactExports.useEffect(() => {
      if (content) {
        let pointerMoveDelta = { x: 0, y: 0 };
        const handlePointerMove = (event) => {
          var _a, _b;
          pointerMoveDelta = {
            x: Math.abs(Math.round(event.pageX) - (((_a = triggerPointerDownPosRef.current) == null ? void 0 : _a.x) ?? 0)),
            y: Math.abs(Math.round(event.pageY) - (((_b = triggerPointerDownPosRef.current) == null ? void 0 : _b.y) ?? 0))
          };
        };
        const handlePointerUp = (event) => {
          if (pointerMoveDelta.x <= 10 && pointerMoveDelta.y <= 10) {
            event.preventDefault();
          } else {
            if (!content.contains(event.target)) {
              onOpenChange(false);
            }
          }
          document.removeEventListener("pointermove", handlePointerMove);
          triggerPointerDownPosRef.current = null;
        };
        if (triggerPointerDownPosRef.current !== null) {
          document.addEventListener("pointermove", handlePointerMove);
          document.addEventListener("pointerup", handlePointerUp, { capture: true, once: true });
        }
        return () => {
          document.removeEventListener("pointermove", handlePointerMove);
          document.removeEventListener("pointerup", handlePointerUp, { capture: true });
        };
      }
    }, [content, onOpenChange, triggerPointerDownPosRef]);
    reactExports.useEffect(() => {
      const close = () => onOpenChange(false);
      window.addEventListener("blur", close);
      window.addEventListener("resize", close);
      return () => {
        window.removeEventListener("blur", close);
        window.removeEventListener("resize", close);
      };
    }, [onOpenChange]);
    const [searchRef, handleTypeaheadSearch] = useTypeaheadSearch((search) => {
      const enabledItems = getItems().filter((item) => !item.disabled);
      const currentItem = enabledItems.find((item) => item.ref.current === document.activeElement);
      const nextItem = findNextItem(enabledItems, search, currentItem);
      if (nextItem) {
        setTimeout(() => nextItem.ref.current.focus());
      }
    });
    const itemRefCallback = reactExports.useCallback(
      (node, value, disabled) => {
        const isFirstValidItem = !firstValidItemFoundRef.current && !disabled;
        const isSelectedItem = context.value !== void 0 && context.value === value;
        if (isSelectedItem || isFirstValidItem) {
          setSelectedItem(node);
          if (isFirstValidItem) firstValidItemFoundRef.current = true;
        }
      },
      [context.value]
    );
    const handleItemLeave = reactExports.useCallback(() => content == null ? void 0 : content.focus(), [content]);
    const itemTextRefCallback = reactExports.useCallback(
      (node, value, disabled) => {
        const isFirstValidItem = !firstValidItemFoundRef.current && !disabled;
        const isSelectedItem = context.value !== void 0 && context.value === value;
        if (isSelectedItem || isFirstValidItem) {
          setSelectedItemText(node);
        }
      },
      [context.value]
    );
    const SelectPosition = position === "popper" ? SelectPopperPosition : SelectItemAlignedPosition;
    const popperContentProps = SelectPosition === SelectPopperPosition ? {
      side,
      sideOffset,
      align,
      alignOffset,
      arrowPadding,
      collisionBoundary,
      collisionPadding,
      sticky,
      hideWhenDetached,
      avoidCollisions
    } : {};
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      SelectContentProvider,
      {
        scope: __scopeSelect,
        content,
        viewport,
        onViewportChange: setViewport,
        itemRefCallback,
        selectedItem,
        onItemLeave: handleItemLeave,
        itemTextRefCallback,
        focusSelectedItem,
        selectedItemText,
        position,
        isPositioned,
        searchRef,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(ReactRemoveScroll, { as: Slot, allowPinchZoom: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          FocusScope,
          {
            asChild: true,
            trapped: context.open,
            onMountAutoFocus: (event) => {
              event.preventDefault();
            },
            onUnmountAutoFocus: composeEventHandlers(onCloseAutoFocus, (event) => {
              var _a;
              (_a = context.trigger) == null ? void 0 : _a.focus({ preventScroll: true });
              event.preventDefault();
            }),
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              DismissableLayer,
              {
                asChild: true,
                disableOutsidePointerEvents: true,
                onEscapeKeyDown,
                onPointerDownOutside,
                onFocusOutside: (event) => event.preventDefault(),
                onDismiss: () => context.onOpenChange(false),
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  SelectPosition,
                  {
                    role: "listbox",
                    id: context.contentId,
                    "data-state": context.open ? "open" : "closed",
                    dir: context.dir,
                    onContextMenu: (event) => event.preventDefault(),
                    ...contentProps,
                    ...popperContentProps,
                    onPlaced: () => setIsPositioned(true),
                    ref: composedRefs,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...contentProps.style
                    },
                    onKeyDown: composeEventHandlers(contentProps.onKeyDown, (event) => {
                      const isModifierKey = event.ctrlKey || event.altKey || event.metaKey;
                      if (event.key === "Tab") event.preventDefault();
                      if (!isModifierKey && event.key.length === 1) handleTypeaheadSearch(event.key);
                      if (["ArrowUp", "ArrowDown", "Home", "End"].includes(event.key)) {
                        const items = getItems().filter((item) => !item.disabled);
                        let candidateNodes = items.map((item) => item.ref.current);
                        if (["ArrowUp", "End"].includes(event.key)) {
                          candidateNodes = candidateNodes.slice().reverse();
                        }
                        if (["ArrowUp", "ArrowDown"].includes(event.key)) {
                          const currentElement = event.target;
                          const currentIndex = candidateNodes.indexOf(currentElement);
                          candidateNodes = candidateNodes.slice(currentIndex + 1);
                        }
                        setTimeout(() => focusFirst(candidateNodes));
                        event.preventDefault();
                      }
                    })
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
SelectContentImpl.displayName = CONTENT_IMPL_NAME;
var ITEM_ALIGNED_POSITION_NAME = "SelectItemAlignedPosition";
var SelectItemAlignedPosition = reactExports.forwardRef((props, forwardedRef) => {
  const { __scopeSelect, onPlaced, ...popperProps } = props;
  const context = useSelectContext(CONTENT_NAME, __scopeSelect);
  const contentContext = useSelectContentContext(CONTENT_NAME, __scopeSelect);
  const [contentWrapper, setContentWrapper] = reactExports.useState(null);
  const [content, setContent] = reactExports.useState(null);
  const composedRefs = useComposedRefs(forwardedRef, (node) => setContent(node));
  const getItems = useCollection(__scopeSelect);
  const shouldExpandOnScrollRef = reactExports.useRef(false);
  const shouldRepositionRef = reactExports.useRef(true);
  const { viewport, selectedItem, selectedItemText, focusSelectedItem } = contentContext;
  const position = reactExports.useCallback(() => {
    if (context.trigger && context.valueNode && contentWrapper && content && viewport && selectedItem && selectedItemText) {
      const triggerRect = context.trigger.getBoundingClientRect();
      const contentRect = content.getBoundingClientRect();
      const valueNodeRect = context.valueNode.getBoundingClientRect();
      const itemTextRect = selectedItemText.getBoundingClientRect();
      if (context.dir !== "rtl") {
        const itemTextOffset = itemTextRect.left - contentRect.left;
        const left = valueNodeRect.left - itemTextOffset;
        const leftDelta = triggerRect.left - left;
        const minContentWidth = triggerRect.width + leftDelta;
        const contentWidth = Math.max(minContentWidth, contentRect.width);
        const rightEdge = window.innerWidth - CONTENT_MARGIN;
        const clampedLeft = clamp(left, [
          CONTENT_MARGIN,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(CONTENT_MARGIN, rightEdge - contentWidth)
        ]);
        contentWrapper.style.minWidth = minContentWidth + "px";
        contentWrapper.style.left = clampedLeft + "px";
      } else {
        const itemTextOffset = contentRect.right - itemTextRect.right;
        const right = window.innerWidth - valueNodeRect.right - itemTextOffset;
        const rightDelta = window.innerWidth - triggerRect.right - right;
        const minContentWidth = triggerRect.width + rightDelta;
        const contentWidth = Math.max(minContentWidth, contentRect.width);
        const leftEdge = window.innerWidth - CONTENT_MARGIN;
        const clampedRight = clamp(right, [
          CONTENT_MARGIN,
          Math.max(CONTENT_MARGIN, leftEdge - contentWidth)
        ]);
        contentWrapper.style.minWidth = minContentWidth + "px";
        contentWrapper.style.right = clampedRight + "px";
      }
      const items = getItems();
      const availableHeight = window.innerHeight - CONTENT_MARGIN * 2;
      const itemsHeight = viewport.scrollHeight;
      const contentStyles = window.getComputedStyle(content);
      const contentBorderTopWidth = parseInt(contentStyles.borderTopWidth, 10);
      const contentPaddingTop = parseInt(contentStyles.paddingTop, 10);
      const contentBorderBottomWidth = parseInt(contentStyles.borderBottomWidth, 10);
      const contentPaddingBottom = parseInt(contentStyles.paddingBottom, 10);
      const fullContentHeight = contentBorderTopWidth + contentPaddingTop + itemsHeight + contentPaddingBottom + contentBorderBottomWidth;
      const minContentHeight = Math.min(selectedItem.offsetHeight * 5, fullContentHeight);
      const viewportStyles = window.getComputedStyle(viewport);
      const viewportPaddingTop = parseInt(viewportStyles.paddingTop, 10);
      const viewportPaddingBottom = parseInt(viewportStyles.paddingBottom, 10);
      const topEdgeToTriggerMiddle = triggerRect.top + triggerRect.height / 2 - CONTENT_MARGIN;
      const triggerMiddleToBottomEdge = availableHeight - topEdgeToTriggerMiddle;
      const selectedItemHalfHeight = selectedItem.offsetHeight / 2;
      const itemOffsetMiddle = selectedItem.offsetTop + selectedItemHalfHeight;
      const contentTopToItemMiddle = contentBorderTopWidth + contentPaddingTop + itemOffsetMiddle;
      const itemMiddleToContentBottom = fullContentHeight - contentTopToItemMiddle;
      const willAlignWithoutTopOverflow = contentTopToItemMiddle <= topEdgeToTriggerMiddle;
      if (willAlignWithoutTopOverflow) {
        const isLastItem = items.length > 0 && selectedItem === items[items.length - 1].ref.current;
        contentWrapper.style.bottom = "0px";
        const viewportOffsetBottom = content.clientHeight - viewport.offsetTop - viewport.offsetHeight;
        const clampedTriggerMiddleToBottomEdge = Math.max(
          triggerMiddleToBottomEdge,
          selectedItemHalfHeight + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (isLastItem ? viewportPaddingBottom : 0) + viewportOffsetBottom + contentBorderBottomWidth
        );
        const height = contentTopToItemMiddle + clampedTriggerMiddleToBottomEdge;
        contentWrapper.style.height = height + "px";
      } else {
        const isFirstItem = items.length > 0 && selectedItem === items[0].ref.current;
        contentWrapper.style.top = "0px";
        const clampedTopEdgeToTriggerMiddle = Math.max(
          topEdgeToTriggerMiddle,
          contentBorderTopWidth + viewport.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (isFirstItem ? viewportPaddingTop : 0) + selectedItemHalfHeight
        );
        const height = clampedTopEdgeToTriggerMiddle + itemMiddleToContentBottom;
        contentWrapper.style.height = height + "px";
        viewport.scrollTop = contentTopToItemMiddle - topEdgeToTriggerMiddle + viewport.offsetTop;
      }
      contentWrapper.style.margin = `${CONTENT_MARGIN}px 0`;
      contentWrapper.style.minHeight = minContentHeight + "px";
      contentWrapper.style.maxHeight = availableHeight + "px";
      onPlaced == null ? void 0 : onPlaced();
      requestAnimationFrame(() => shouldExpandOnScrollRef.current = true);
    }
  }, [
    getItems,
    context.trigger,
    context.valueNode,
    contentWrapper,
    content,
    viewport,
    selectedItem,
    selectedItemText,
    context.dir,
    onPlaced
  ]);
  useLayoutEffect2(() => position(), [position]);
  const [contentZIndex, setContentZIndex] = reactExports.useState();
  useLayoutEffect2(() => {
    if (content) setContentZIndex(window.getComputedStyle(content).zIndex);
  }, [content]);
  const handleScrollButtonChange = reactExports.useCallback(
    (node) => {
      if (node && shouldRepositionRef.current === true) {
        position();
        focusSelectedItem == null ? void 0 : focusSelectedItem();
        shouldRepositionRef.current = false;
      }
    },
    [position, focusSelectedItem]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    SelectViewportProvider,
    {
      scope: __scopeSelect,
      contentWrapper,
      shouldExpandOnScrollRef,
      onScrollButtonChange: handleScrollButtonChange,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          ref: setContentWrapper,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: contentZIndex
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Primitive.div,
            {
              ...popperProps,
              ref: composedRefs,
              style: {
                // When we get the height of the content, it includes borders. If we were to set
                // the height without having `boxSizing: 'border-box'` it would be too big.
                boxSizing: "border-box",
                // We need to ensure the content doesn't get taller than the wrapper
                maxHeight: "100%",
                ...popperProps.style
              }
            }
          )
        }
      )
    }
  );
});
SelectItemAlignedPosition.displayName = ITEM_ALIGNED_POSITION_NAME;
var POPPER_POSITION_NAME = "SelectPopperPosition";
var SelectPopperPosition = reactExports.forwardRef((props, forwardedRef) => {
  const {
    __scopeSelect,
    align = "start",
    collisionPadding = CONTENT_MARGIN,
    ...popperProps
  } = props;
  const popperScope = usePopperScope(__scopeSelect);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Content,
    {
      ...popperScope,
      ...popperProps,
      ref: forwardedRef,
      align,
      collisionPadding,
      style: {
        // Ensure border-box for floating-ui calculations
        boxSizing: "border-box",
        ...popperProps.style,
        // re-namespace exposed content custom properties
        ...{
          "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-select-content-available-width": "var(--radix-popper-available-width)",
          "--radix-select-content-available-height": "var(--radix-popper-available-height)",
          "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    }
  );
});
SelectPopperPosition.displayName = POPPER_POSITION_NAME;
var [SelectViewportProvider, useSelectViewportContext] = createSelectContext(CONTENT_NAME, {});
var VIEWPORT_NAME = "SelectViewport";
var SelectViewport = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeSelect, nonce, ...viewportProps } = props;
    const contentContext = useSelectContentContext(VIEWPORT_NAME, __scopeSelect);
    const viewportContext = useSelectViewportContext(VIEWPORT_NAME, __scopeSelect);
    const composedRefs = useComposedRefs(forwardedRef, contentContext.onViewportChange);
    const prevScrollTopRef = reactExports.useRef(0);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: `[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}`
          },
          nonce
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Collection.Slot, { scope: __scopeSelect, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Primitive.div,
        {
          "data-radix-select-viewport": "",
          role: "presentation",
          ...viewportProps,
          ref: composedRefs,
          style: {
            // we use position: 'relative' here on the `viewport` so that when we call
            // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
            // (independent of the scrollUpButton).
            position: "relative",
            flex: 1,
            // Viewport should only be scrollable in the vertical direction.
            // This won't work in vertical writing modes, so we'll need to
            // revisit this if/when that is supported
            // https://developer.chrome.com/blog/vertical-form-controls
            overflow: "hidden auto",
            ...viewportProps.style
          },
          onScroll: composeEventHandlers(viewportProps.onScroll, (event) => {
            const viewport = event.currentTarget;
            const { contentWrapper, shouldExpandOnScrollRef } = viewportContext;
            if ((shouldExpandOnScrollRef == null ? void 0 : shouldExpandOnScrollRef.current) && contentWrapper) {
              const scrolledBy = Math.abs(prevScrollTopRef.current - viewport.scrollTop);
              if (scrolledBy > 0) {
                const availableHeight = window.innerHeight - CONTENT_MARGIN * 2;
                const cssMinHeight = parseFloat(contentWrapper.style.minHeight);
                const cssHeight = parseFloat(contentWrapper.style.height);
                const prevHeight = Math.max(cssMinHeight, cssHeight);
                if (prevHeight < availableHeight) {
                  const nextHeight = prevHeight + scrolledBy;
                  const clampedNextHeight = Math.min(availableHeight, nextHeight);
                  const heightDiff = nextHeight - clampedNextHeight;
                  contentWrapper.style.height = clampedNextHeight + "px";
                  if (contentWrapper.style.bottom === "0px") {
                    viewport.scrollTop = heightDiff > 0 ? heightDiff : 0;
                    contentWrapper.style.justifyContent = "flex-end";
                  }
                }
              }
            }
            prevScrollTopRef.current = viewport.scrollTop;
          })
        }
      ) })
    ] });
  }
);
SelectViewport.displayName = VIEWPORT_NAME;
var GROUP_NAME = "SelectGroup";
var [SelectGroupContextProvider, useSelectGroupContext] = createSelectContext(GROUP_NAME);
var SelectGroup = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeSelect, ...groupProps } = props;
    const groupId = useId();
    return /* @__PURE__ */ jsxRuntimeExports.jsx(SelectGroupContextProvider, { scope: __scopeSelect, id: groupId, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Primitive.div, { role: "group", "aria-labelledby": groupId, ...groupProps, ref: forwardedRef }) });
  }
);
SelectGroup.displayName = GROUP_NAME;
var LABEL_NAME = "SelectLabel";
var SelectLabel = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeSelect, ...labelProps } = props;
    const groupContext = useSelectGroupContext(LABEL_NAME, __scopeSelect);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Primitive.div, { id: groupContext.id, ...labelProps, ref: forwardedRef });
  }
);
SelectLabel.displayName = LABEL_NAME;
var ITEM_NAME = "SelectItem";
var [SelectItemContextProvider, useSelectItemContext] = createSelectContext(ITEM_NAME);
var SelectItem$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeSelect,
      value,
      disabled = false,
      textValue: textValueProp,
      ...itemProps
    } = props;
    const context = useSelectContext(ITEM_NAME, __scopeSelect);
    const contentContext = useSelectContentContext(ITEM_NAME, __scopeSelect);
    const isSelected = context.value === value;
    const [textValue, setTextValue] = reactExports.useState(textValueProp ?? "");
    const [isFocused, setIsFocused] = reactExports.useState(false);
    const composedRefs = useComposedRefs(
      forwardedRef,
      (node) => {
        var _a;
        return (_a = contentContext.itemRefCallback) == null ? void 0 : _a.call(contentContext, node, value, disabled);
      }
    );
    const textId = useId();
    const pointerTypeRef = reactExports.useRef("touch");
    const handleSelect = () => {
      if (!disabled) {
        context.onValueChange(value);
        context.onOpenChange(false);
      }
    };
    if (value === "") {
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      SelectItemContextProvider,
      {
        scope: __scopeSelect,
        value,
        disabled,
        textId,
        isSelected,
        onItemTextChange: reactExports.useCallback((node) => {
          setTextValue((prevTextValue) => prevTextValue || ((node == null ? void 0 : node.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Collection.ItemSlot,
          {
            scope: __scopeSelect,
            value,
            disabled,
            textValue,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Primitive.div,
              {
                role: "option",
                "aria-labelledby": textId,
                "data-highlighted": isFocused ? "" : void 0,
                "aria-selected": isSelected && isFocused,
                "data-state": isSelected ? "checked" : "unchecked",
                "aria-disabled": disabled || void 0,
                "data-disabled": disabled ? "" : void 0,
                tabIndex: disabled ? void 0 : -1,
                ...itemProps,
                ref: composedRefs,
                onFocus: composeEventHandlers(itemProps.onFocus, () => setIsFocused(true)),
                onBlur: composeEventHandlers(itemProps.onBlur, () => setIsFocused(false)),
                onClick: composeEventHandlers(itemProps.onClick, () => {
                  if (pointerTypeRef.current !== "mouse") handleSelect();
                }),
                onPointerUp: composeEventHandlers(itemProps.onPointerUp, () => {
                  if (pointerTypeRef.current === "mouse") handleSelect();
                }),
                onPointerDown: composeEventHandlers(itemProps.onPointerDown, (event) => {
                  pointerTypeRef.current = event.pointerType;
                }),
                onPointerMove: composeEventHandlers(itemProps.onPointerMove, (event) => {
                  var _a;
                  pointerTypeRef.current = event.pointerType;
                  if (disabled) {
                    (_a = contentContext.onItemLeave) == null ? void 0 : _a.call(contentContext);
                  } else if (pointerTypeRef.current === "mouse") {
                    event.currentTarget.focus({ preventScroll: true });
                  }
                }),
                onPointerLeave: composeEventHandlers(itemProps.onPointerLeave, (event) => {
                  var _a;
                  if (event.currentTarget === document.activeElement) {
                    (_a = contentContext.onItemLeave) == null ? void 0 : _a.call(contentContext);
                  }
                }),
                onKeyDown: composeEventHandlers(itemProps.onKeyDown, (event) => {
                  var _a;
                  const isTypingAhead = ((_a = contentContext.searchRef) == null ? void 0 : _a.current) !== "";
                  if (isTypingAhead && event.key === " ") return;
                  if (SELECTION_KEYS.includes(event.key)) handleSelect();
                  if (event.key === " ") event.preventDefault();
                })
              }
            )
          }
        )
      }
    );
  }
);
SelectItem$1.displayName = ITEM_NAME;
var ITEM_TEXT_NAME = "SelectItemText";
var SelectItemText = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeSelect, className, style, ...itemTextProps } = props;
    const context = useSelectContext(ITEM_TEXT_NAME, __scopeSelect);
    const contentContext = useSelectContentContext(ITEM_TEXT_NAME, __scopeSelect);
    const itemContext = useSelectItemContext(ITEM_TEXT_NAME, __scopeSelect);
    const nativeOptionsContext = useSelectNativeOptionsContext(ITEM_TEXT_NAME, __scopeSelect);
    const [itemTextNode, setItemTextNode] = reactExports.useState(null);
    const composedRefs = useComposedRefs(
      forwardedRef,
      (node) => setItemTextNode(node),
      itemContext.onItemTextChange,
      (node) => {
        var _a;
        return (_a = contentContext.itemTextRefCallback) == null ? void 0 : _a.call(contentContext, node, itemContext.value, itemContext.disabled);
      }
    );
    const textContent = itemTextNode == null ? void 0 : itemTextNode.textContent;
    const nativeOption = reactExports.useMemo(
      () => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: itemContext.value, disabled: itemContext.disabled, children: textContent }, itemContext.value),
      [itemContext.disabled, itemContext.value, textContent]
    );
    const { onNativeOptionAdd, onNativeOptionRemove } = nativeOptionsContext;
    useLayoutEffect2(() => {
      onNativeOptionAdd(nativeOption);
      return () => onNativeOptionRemove(nativeOption);
    }, [onNativeOptionAdd, onNativeOptionRemove, nativeOption]);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Primitive.span, { id: itemContext.textId, ...itemTextProps, ref: composedRefs }),
      itemContext.isSelected && context.valueNode && !context.valueNodeHasChildren ? reactDomExports.createPortal(itemTextProps.children, context.valueNode) : null
    ] });
  }
);
SelectItemText.displayName = ITEM_TEXT_NAME;
var ITEM_INDICATOR_NAME = "SelectItemIndicator";
var SelectItemIndicator = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeSelect, ...itemIndicatorProps } = props;
    const itemContext = useSelectItemContext(ITEM_INDICATOR_NAME, __scopeSelect);
    return itemContext.isSelected ? /* @__PURE__ */ jsxRuntimeExports.jsx(Primitive.span, { "aria-hidden": true, ...itemIndicatorProps, ref: forwardedRef }) : null;
  }
);
SelectItemIndicator.displayName = ITEM_INDICATOR_NAME;
var SCROLL_UP_BUTTON_NAME = "SelectScrollUpButton";
var SelectScrollUpButton$1 = reactExports.forwardRef((props, forwardedRef) => {
  const contentContext = useSelectContentContext(SCROLL_UP_BUTTON_NAME, props.__scopeSelect);
  const viewportContext = useSelectViewportContext(SCROLL_UP_BUTTON_NAME, props.__scopeSelect);
  const [canScrollUp, setCanScrollUp] = reactExports.useState(false);
  const composedRefs = useComposedRefs(forwardedRef, viewportContext.onScrollButtonChange);
  useLayoutEffect2(() => {
    if (contentContext.viewport && contentContext.isPositioned) {
      let handleScroll2 = function() {
        const canScrollUp2 = viewport.scrollTop > 0;
        setCanScrollUp(canScrollUp2);
      };
      const viewport = contentContext.viewport;
      handleScroll2();
      viewport.addEventListener("scroll", handleScroll2);
      return () => viewport.removeEventListener("scroll", handleScroll2);
    }
  }, [contentContext.viewport, contentContext.isPositioned]);
  return canScrollUp ? /* @__PURE__ */ jsxRuntimeExports.jsx(
    SelectScrollButtonImpl,
    {
      ...props,
      ref: composedRefs,
      onAutoScroll: () => {
        const { viewport, selectedItem } = contentContext;
        if (viewport && selectedItem) {
          viewport.scrollTop = viewport.scrollTop - selectedItem.offsetHeight;
        }
      }
    }
  ) : null;
});
SelectScrollUpButton$1.displayName = SCROLL_UP_BUTTON_NAME;
var SCROLL_DOWN_BUTTON_NAME = "SelectScrollDownButton";
var SelectScrollDownButton$1 = reactExports.forwardRef((props, forwardedRef) => {
  const contentContext = useSelectContentContext(SCROLL_DOWN_BUTTON_NAME, props.__scopeSelect);
  const viewportContext = useSelectViewportContext(SCROLL_DOWN_BUTTON_NAME, props.__scopeSelect);
  const [canScrollDown, setCanScrollDown] = reactExports.useState(false);
  const composedRefs = useComposedRefs(forwardedRef, viewportContext.onScrollButtonChange);
  useLayoutEffect2(() => {
    if (contentContext.viewport && contentContext.isPositioned) {
      let handleScroll2 = function() {
        const maxScroll = viewport.scrollHeight - viewport.clientHeight;
        const canScrollDown2 = Math.ceil(viewport.scrollTop) < maxScroll;
        setCanScrollDown(canScrollDown2);
      };
      const viewport = contentContext.viewport;
      handleScroll2();
      viewport.addEventListener("scroll", handleScroll2);
      return () => viewport.removeEventListener("scroll", handleScroll2);
    }
  }, [contentContext.viewport, contentContext.isPositioned]);
  return canScrollDown ? /* @__PURE__ */ jsxRuntimeExports.jsx(
    SelectScrollButtonImpl,
    {
      ...props,
      ref: composedRefs,
      onAutoScroll: () => {
        const { viewport, selectedItem } = contentContext;
        if (viewport && selectedItem) {
          viewport.scrollTop = viewport.scrollTop + selectedItem.offsetHeight;
        }
      }
    }
  ) : null;
});
SelectScrollDownButton$1.displayName = SCROLL_DOWN_BUTTON_NAME;
var SelectScrollButtonImpl = reactExports.forwardRef((props, forwardedRef) => {
  const { __scopeSelect, onAutoScroll, ...scrollIndicatorProps } = props;
  const contentContext = useSelectContentContext("SelectScrollButton", __scopeSelect);
  const autoScrollTimerRef = reactExports.useRef(null);
  const getItems = useCollection(__scopeSelect);
  const clearAutoScrollTimer = reactExports.useCallback(() => {
    if (autoScrollTimerRef.current !== null) {
      window.clearInterval(autoScrollTimerRef.current);
      autoScrollTimerRef.current = null;
    }
  }, []);
  reactExports.useEffect(() => {
    return () => clearAutoScrollTimer();
  }, [clearAutoScrollTimer]);
  useLayoutEffect2(() => {
    var _a;
    const activeItem = getItems().find((item) => item.ref.current === document.activeElement);
    (_a = activeItem == null ? void 0 : activeItem.ref.current) == null ? void 0 : _a.scrollIntoView({ block: "nearest" });
  }, [getItems]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Primitive.div,
    {
      "aria-hidden": true,
      ...scrollIndicatorProps,
      ref: forwardedRef,
      style: { flexShrink: 0, ...scrollIndicatorProps.style },
      onPointerDown: composeEventHandlers(scrollIndicatorProps.onPointerDown, () => {
        if (autoScrollTimerRef.current === null) {
          autoScrollTimerRef.current = window.setInterval(onAutoScroll, 50);
        }
      }),
      onPointerMove: composeEventHandlers(scrollIndicatorProps.onPointerMove, () => {
        var _a;
        (_a = contentContext.onItemLeave) == null ? void 0 : _a.call(contentContext);
        if (autoScrollTimerRef.current === null) {
          autoScrollTimerRef.current = window.setInterval(onAutoScroll, 50);
        }
      }),
      onPointerLeave: composeEventHandlers(scrollIndicatorProps.onPointerLeave, () => {
        clearAutoScrollTimer();
      })
    }
  );
});
var SEPARATOR_NAME = "SelectSeparator";
var SelectSeparator = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeSelect, ...separatorProps } = props;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Primitive.div, { "aria-hidden": true, ...separatorProps, ref: forwardedRef });
  }
);
SelectSeparator.displayName = SEPARATOR_NAME;
var ARROW_NAME = "SelectArrow";
var SelectArrow = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeSelect, ...arrowProps } = props;
    const popperScope = usePopperScope(__scopeSelect);
    const context = useSelectContext(ARROW_NAME, __scopeSelect);
    const contentContext = useSelectContentContext(ARROW_NAME, __scopeSelect);
    return context.open && contentContext.position === "popper" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Arrow, { ...popperScope, ...arrowProps, ref: forwardedRef }) : null;
  }
);
SelectArrow.displayName = ARROW_NAME;
var BUBBLE_INPUT_NAME = "SelectBubbleInput";
var SelectBubbleInput = reactExports.forwardRef(
  ({ __scopeSelect, value, ...props }, forwardedRef) => {
    const ref = reactExports.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, ref);
    const prevValue = usePrevious(value);
    reactExports.useEffect(() => {
      const select = ref.current;
      if (!select) return;
      const selectProto = window.HTMLSelectElement.prototype;
      const descriptor = Object.getOwnPropertyDescriptor(
        selectProto,
        "value"
      );
      const setValue = descriptor.set;
      if (prevValue !== value && setValue) {
        const event = new Event("change", { bubbles: true });
        setValue.call(select, value);
        select.dispatchEvent(event);
      }
    }, [prevValue, value]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.select,
      {
        ...props,
        style: { ...VISUALLY_HIDDEN_STYLES, ...props.style },
        ref: composedRefs,
        defaultValue: value
      }
    );
  }
);
SelectBubbleInput.displayName = BUBBLE_INPUT_NAME;
function shouldShowPlaceholder(value) {
  return value === "" || value === void 0;
}
function useTypeaheadSearch(onSearchChange) {
  const handleSearchChange = useCallbackRef(onSearchChange);
  const searchRef = reactExports.useRef("");
  const timerRef = reactExports.useRef(0);
  const handleTypeaheadSearch = reactExports.useCallback(
    (key) => {
      const search = searchRef.current + key;
      handleSearchChange(search);
      (function updateSearch(value) {
        searchRef.current = value;
        window.clearTimeout(timerRef.current);
        if (value !== "") timerRef.current = window.setTimeout(() => updateSearch(""), 1e3);
      })(search);
    },
    [handleSearchChange]
  );
  const resetTypeahead = reactExports.useCallback(() => {
    searchRef.current = "";
    window.clearTimeout(timerRef.current);
  }, []);
  reactExports.useEffect(() => {
    return () => window.clearTimeout(timerRef.current);
  }, []);
  return [searchRef, handleTypeaheadSearch, resetTypeahead];
}
function findNextItem(items, search, currentItem) {
  const isRepeated = search.length > 1 && Array.from(search).every((char) => char === search[0]);
  const normalizedSearch = isRepeated ? search[0] : search;
  const currentItemIndex = currentItem ? items.indexOf(currentItem) : -1;
  let wrappedItems = wrapArray(items, Math.max(currentItemIndex, 0));
  const excludeCurrentItem = normalizedSearch.length === 1;
  if (excludeCurrentItem) wrappedItems = wrappedItems.filter((v) => v !== currentItem);
  const nextItem = wrappedItems.find(
    (item) => item.textValue.toLowerCase().startsWith(normalizedSearch.toLowerCase())
  );
  return nextItem !== currentItem ? nextItem : void 0;
}
function wrapArray(array, startIndex) {
  return array.map((_, index) => array[(startIndex + index) % array.length]);
}
var Root2 = Select$1;
var Trigger = SelectTrigger$1;
var Value = SelectValue$1;
var Icon = SelectIcon;
var Portal = SelectPortal;
var Content2 = SelectContent$1;
var Viewport = SelectViewport;
var Item = SelectItem$1;
var ItemText = SelectItemText;
var ItemIndicator = SelectItemIndicator;
var ScrollUpButton = SelectScrollUpButton$1;
var ScrollDownButton = SelectScrollDownButton$1;
function Select({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Root2, { "data-slot": "select", ...props });
}
function SelectValue({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Value, { "data-slot": "select-value", ...props });
}
function SelectTrigger({
  className,
  size = "default",
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Trigger,
    {
      "data-slot": "select-trigger",
      "data-size": size,
      className: cn(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "size-4 opacity-50" }) })
      ]
    }
  );
}
function SelectContent({
  className,
  children,
  position = "popper",
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Portal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Content2,
    {
      "data-slot": "select-content",
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
        position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      ),
      position,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectScrollUpButton, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Viewport,
          {
            className: cn(
              "p-1",
              position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectScrollDownButton, {})
      ]
    }
  ) });
}
function SelectItem({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Item,
    {
      "data-slot": "select-item",
      className: cn(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute right-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ItemIndicator, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-4" }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ItemText, { children })
      ]
    }
  );
}
function SelectScrollUpButton({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    ScrollUpButton,
    {
      "data-slot": "select-scroll-up-button",
      className: cn(
        "flex cursor-default items-center justify-center py-1",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "size-4" })
    }
  );
}
function SelectScrollDownButton({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    ScrollDownButton,
    {
      "data-slot": "select-scroll-down-button",
      className: cn(
        "flex cursor-default items-center justify-center py-1",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "size-4" })
    }
  );
}
var NAME = "Separator";
var DEFAULT_ORIENTATION = "horizontal";
var ORIENTATIONS = ["horizontal", "vertical"];
var Separator$1 = reactExports.forwardRef((props, forwardedRef) => {
  const { decorative, orientation: orientationProp = DEFAULT_ORIENTATION, ...domProps } = props;
  const orientation = isValidOrientation(orientationProp) ? orientationProp : DEFAULT_ORIENTATION;
  const ariaOrientation = orientation === "vertical" ? orientation : void 0;
  const semanticProps = decorative ? { role: "none" } : { "aria-orientation": ariaOrientation, role: "separator" };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Primitive.div,
    {
      "data-orientation": orientation,
      ...semanticProps,
      ...domProps,
      ref: forwardedRef
    }
  );
});
Separator$1.displayName = NAME;
function isValidOrientation(orientation) {
  return ORIENTATIONS.includes(orientation);
}
var Root = Separator$1;
function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Root,
    {
      "data-slot": "separator",
      decorative,
      orientation,
      className: cn(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className
      ),
      ...props
    }
  );
}
const COUNTRIES = [
  {
    code: "IN",
    name: "India",
    flag: "🇮🇳",
    currency: "INR",
    currencySymbol: "₹",
    costOfLiving: { food: 300, transport: 150, hotel: 1500, dailyBudget: 2500 },
    paymentMethods: {
      cash: "Widely Accepted",
      card: "Widely Accepted",
      digital: "Essential",
      notes: "UPI dominates. BHIM, PhonePe, GPay accepted almost everywhere."
    }
  },
  {
    code: "US",
    name: "USA",
    flag: "🇺🇸",
    currency: "USD",
    currencySymbol: "$",
    costOfLiving: { food: 30, transport: 15, hotel: 120, dailyBudget: 180 },
    paymentMethods: {
      cash: "Limited",
      card: "Essential",
      digital: "Widely Accepted",
      notes: "Cards are king. Apple Pay & Google Pay widely accepted. Tip 15–20%."
    }
  },
  {
    code: "GB",
    name: "United Kingdom",
    flag: "🇬🇧",
    currency: "GBP",
    currencySymbol: "£",
    costOfLiving: { food: 25, transport: 12, hotel: 100, dailyBudget: 160 },
    paymentMethods: {
      cash: "Limited",
      card: "Essential",
      digital: "Widely Accepted",
      notes: "Contactless cards are universal. Oyster card for London transit."
    }
  },
  {
    code: "AE",
    name: "UAE",
    flag: "🇦🇪",
    currency: "AED",
    currencySymbol: "د.إ",
    costOfLiving: { food: 60, transport: 25, hotel: 250, dailyBudget: 400 },
    paymentMethods: {
      cash: "Widely Accepted",
      card: "Essential",
      digital: "Widely Accepted",
      notes: "Mix of cash and card. Nol card for Dubai Metro. Very safe to carry cash."
    }
  },
  {
    code: "TH",
    name: "Thailand",
    flag: "🇹🇭",
    currency: "THB",
    currencySymbol: "฿",
    costOfLiving: { food: 200, transport: 100, hotel: 800, dailyBudget: 1400 },
    paymentMethods: {
      cash: "Essential",
      card: "Widely Accepted",
      digital: "Limited",
      notes: "Street food markets require cash. ATMs widely available but charge fees."
    }
  },
  {
    code: "SG",
    name: "Singapore",
    flag: "🇸🇬",
    currency: "SGD",
    currencySymbol: "S$",
    costOfLiving: { food: 15, transport: 8, hotel: 140, dailyBudget: 200 },
    paymentMethods: {
      cash: "Widely Accepted",
      card: "Essential",
      digital: "Essential",
      notes: "PayNow dominates. EZ-Link card for MRT. Very card-friendly."
    }
  },
  {
    code: "JP",
    name: "Japan",
    flag: "🇯🇵",
    currency: "JPY",
    currencySymbol: "¥",
    costOfLiving: {
      food: 1500,
      transport: 800,
      hotel: 9e3,
      dailyBudget: 15e3
    },
    paymentMethods: {
      cash: "Essential",
      card: "Widely Accepted",
      digital: "Limited",
      notes: "Japan is still very cash-heavy. Carry ¥10,000–20,000 at all times."
    }
  },
  {
    code: "AU",
    name: "Australia",
    flag: "🇦🇺",
    currency: "AUD",
    currencySymbol: "A$",
    costOfLiving: { food: 30, transport: 12, hotel: 120, dailyBudget: 190 },
    paymentMethods: {
      cash: "Limited",
      card: "Essential",
      digital: "Widely Accepted",
      notes: "Tap-and-go is everywhere. Opal card for Sydney, Myki for Melbourne."
    }
  },
  {
    code: "CA",
    name: "Canada",
    flag: "🇨🇦",
    currency: "CAD",
    currencySymbol: "CA$",
    costOfLiving: { food: 30, transport: 12, hotel: 120, dailyBudget: 190 },
    paymentMethods: {
      cash: "Limited",
      card: "Essential",
      digital: "Widely Accepted",
      notes: "Cards and Interac e-Transfer dominate. Tip 15–18% expected."
    }
  },
  {
    code: "DE",
    name: "Germany",
    flag: "🇩🇪",
    currency: "EUR",
    currencySymbol: "€",
    costOfLiving: { food: 20, transport: 10, hotel: 90, dailyBudget: 150 },
    paymentMethods: {
      cash: "Essential",
      card: "Widely Accepted",
      digital: "Limited",
      notes: "Germans still prefer cash (Bargeld). Always carry €20–50 for small shops."
    }
  },
  {
    code: "FR",
    name: "France",
    flag: "🇫🇷",
    currency: "EUR",
    currencySymbol: "€",
    costOfLiving: { food: 25, transport: 12, hotel: 100, dailyBudget: 165 },
    paymentMethods: {
      cash: "Widely Accepted",
      card: "Essential",
      digital: "Limited",
      notes: "Card preferred in Paris. Small markets may be cash-only."
    }
  },
  {
    code: "IT",
    name: "Italy",
    flag: "🇮🇹",
    currency: "EUR",
    currencySymbol: "€",
    costOfLiving: { food: 22, transport: 10, hotel: 90, dailyBudget: 155 },
    paymentMethods: {
      cash: "Widely Accepted",
      card: "Widely Accepted",
      digital: "Limited",
      notes: "Mix of cash and card. Small trattorias often cash-only."
    }
  },
  {
    code: "ES",
    name: "Spain",
    flag: "🇪🇸",
    currency: "EUR",
    currencySymbol: "€",
    costOfLiving: { food: 20, transport: 8, hotel: 80, dailyBudget: 140 },
    paymentMethods: {
      cash: "Widely Accepted",
      card: "Essential",
      digital: "Widely Accepted",
      notes: "Contactless payments very common. Bizum (digital) widely used locally."
    }
  },
  {
    code: "MY",
    name: "Malaysia",
    flag: "🇲🇾",
    currency: "MYR",
    currencySymbol: "RM",
    costOfLiving: { food: 25, transport: 15, hotel: 150, dailyBudget: 250 },
    paymentMethods: {
      cash: "Widely Accepted",
      card: "Widely Accepted",
      digital: "Widely Accepted",
      notes: "Touch 'n Go for transit. DuitNow QR widely accepted. Very affordable."
    }
  },
  {
    code: "ID",
    name: "Indonesia",
    flag: "🇮🇩",
    currency: "IDR",
    currencySymbol: "Rp",
    costOfLiving: {
      food: 6e4,
      transport: 4e4,
      hotel: 35e4,
      dailyBudget: 6e5
    },
    paymentMethods: {
      cash: "Essential",
      card: "Widely Accepted",
      digital: "Widely Accepted",
      notes: "GoPay and OVO are popular. Carry cash for local warungs."
    }
  },
  {
    code: "NP",
    name: "Nepal",
    flag: "🇳🇵",
    currency: "NPR",
    currencySymbol: "रू",
    costOfLiving: { food: 500, transport: 200, hotel: 1500, dailyBudget: 3e3 },
    paymentMethods: {
      cash: "Essential",
      card: "Limited",
      digital: "Limited",
      notes: "Cash is king. Indian rupees also accepted in some places."
    }
  },
  {
    code: "LK",
    name: "Sri Lanka",
    flag: "🇱🇰",
    currency: "LKR",
    currencySymbol: "Rs",
    costOfLiving: {
      food: 1500,
      transport: 800,
      hotel: 6e3,
      dailyBudget: 1e4
    },
    paymentMethods: {
      cash: "Essential",
      card: "Widely Accepted",
      digital: "Limited",
      notes: "Cash preferred outside Colombo. ATMs widely available."
    }
  },
  {
    code: "MV",
    name: "Maldives",
    flag: "🇲🇻",
    currency: "MVR",
    currencySymbol: "Rf",
    costOfLiving: { food: 200, transport: 150, hotel: 3e3, dailyBudget: 5e3 },
    paymentMethods: {
      cash: "Widely Accepted",
      card: "Essential",
      digital: "Limited",
      notes: "Resorts accept cards. Carry USD — widely accepted alongside MVR."
    }
  },
  {
    code: "CH",
    name: "Switzerland",
    flag: "🇨🇭",
    currency: "CHF",
    currencySymbol: "Fr",
    costOfLiving: { food: 30, transport: 15, hotel: 150, dailyBudget: 220 },
    paymentMethods: {
      cash: "Widely Accepted",
      card: "Essential",
      digital: "Widely Accepted",
      notes: "TWINT is popular digital app. Most places accept card but carry some CHF."
    }
  },
  {
    code: "CN",
    name: "China",
    flag: "🇨🇳",
    currency: "CNY",
    currencySymbol: "¥",
    costOfLiving: { food: 50, transport: 20, hotel: 300, dailyBudget: 500 },
    paymentMethods: {
      cash: "Widely Accepted",
      card: "Limited",
      digital: "Essential",
      notes: "WeChat Pay & Alipay dominate. Foreign cards have limited acceptance — bring cash."
    }
  },
  {
    code: "KR",
    name: "South Korea",
    flag: "🇰🇷",
    currency: "KRW",
    currencySymbol: "₩",
    costOfLiving: {
      food: 15e3,
      transport: 8e3,
      hotel: 8e4,
      dailyBudget: 13e4
    },
    paymentMethods: {
      cash: "Widely Accepted",
      card: "Essential",
      digital: "Widely Accepted",
      notes: "Koreans love cards. T-money card for transit. KakaoPay is popular."
    }
  },
  {
    code: "NZ",
    name: "New Zealand",
    flag: "🇳🇿",
    currency: "NZD",
    currencySymbol: "NZ$",
    costOfLiving: { food: 28, transport: 12, hotel: 110, dailyBudget: 180 },
    paymentMethods: {
      cash: "Limited",
      card: "Essential",
      digital: "Widely Accepted",
      notes: "Cards everywhere. EFTPOS is the main debit network."
    }
  },
  {
    code: "ZA",
    name: "South Africa",
    flag: "🇿🇦",
    currency: "ZAR",
    currencySymbol: "R",
    costOfLiving: { food: 200, transport: 100, hotel: 900, dailyBudget: 1500 },
    paymentMethods: {
      cash: "Widely Accepted",
      card: "Essential",
      digital: "Widely Accepted",
      notes: "SnapScan and Zapper digital payments popular. Carry some cash for tipping."
    }
  },
  {
    code: "BR",
    name: "Brazil",
    flag: "🇧🇷",
    currency: "BRL",
    currencySymbol: "R$",
    costOfLiving: { food: 60, transport: 25, hotel: 220, dailyBudget: 380 },
    paymentMethods: {
      cash: "Widely Accepted",
      card: "Widely Accepted",
      digital: "Essential",
      notes: "PIX (instant transfer) is everywhere. Avoid carrying large cash."
    }
  },
  {
    code: "RU",
    name: "Russia",
    flag: "🇷🇺",
    currency: "RUB",
    currencySymbol: "₽",
    costOfLiving: { food: 600, transport: 300, hotel: 3e3, dailyBudget: 5e3 },
    paymentMethods: {
      cash: "Widely Accepted",
      card: "Widely Accepted",
      digital: "Limited",
      notes: "Mir cards dominate since SWIFT restrictions. Carry cash as backup."
    }
  },
  {
    code: "TR",
    name: "Turkey",
    flag: "🇹🇷",
    currency: "TRY",
    currencySymbol: "₺",
    costOfLiving: { food: 300, transport: 150, hotel: 1500, dailyBudget: 2500 },
    paymentMethods: {
      cash: "Widely Accepted",
      card: "Essential",
      digital: "Widely Accepted",
      notes: "Very card-friendly. Papara digital wallet popular. USD/EUR also accepted."
    }
  }
];
const FALLBACK_RATES = {
  USD: 0.012,
  GBP: 95e-4,
  AED: 0.044,
  THB: 0.42,
  SGD: 0.016,
  JPY: 1.8,
  AUD: 0.018,
  CAD: 0.016,
  EUR: 0.011,
  MYR: 0.054,
  IDR: 188,
  NPR: 1.6,
  LKR: 3.7,
  MVR: 0.185,
  CHF: 0.011,
  CNY: 0.087,
  KRW: 16,
  NZD: 0.02,
  ZAR: 0.22,
  BRL: 0.059,
  RUB: 1.1,
  TRY: 0.39,
  INR: 1
};
const TRAVEL_TIPS = [
  {
    emoji: "💱",
    title: "Avoid Airport Exchange → Use ATM",
    description: "Airport money changers charge 5–10% commission. Use local ATMs on arrival for rates close to the interbank rate. Inform your bank before travel to avoid card blocks.",
    color: "bg-blue-50 dark:bg-blue-950/30",
    iconBg: "bg-blue-100 dark:bg-blue-900/50",
    iconText: "text-blue-600 dark:text-blue-400",
    borderColor: "border-l-blue-500"
  },
  {
    emoji: "💳",
    title: "Enable International Card Before Travel",
    description: "Call your bank or use net banking to activate international transactions. Set a daily limit. Enable SMS alerts for all transactions abroad to catch fraud instantly.",
    color: "bg-green-50 dark:bg-green-950/30",
    iconBg: "bg-green-100 dark:bg-green-900/50",
    iconText: "text-green-600 dark:text-green-400",
    borderColor: "border-l-green-500"
  },
  {
    emoji: "💸",
    title: "Use Public Transport to Save Money",
    description: "Taxis and ride-shares abroad can cost 5–10x more than local buses or metros. Buy a transit pass for multi-day trips. Use Google Maps for public transport routes.",
    color: "bg-purple-50 dark:bg-purple-950/30",
    iconBg: "bg-purple-100 dark:bg-purple-900/50",
    iconText: "text-purple-600 dark:text-purple-400",
    borderColor: "border-l-purple-500"
  },
  {
    emoji: "🔐",
    title: "Don't Share OTP/PIN, Avoid Public Wi-Fi",
    description: "Never enter banking passwords on hotel or café Wi-Fi. Use a VPN or mobile data for financial transactions. Cover keypads when entering PINs at ATMs abroad.",
    color: "bg-red-50 dark:bg-red-950/30",
    iconBg: "bg-red-100 dark:bg-red-900/50",
    iconText: "text-red-600 dark:text-red-400",
    borderColor: "border-l-red-500"
  },
  {
    emoji: "💵",
    title: "Keep Small Cash + Backup Card",
    description: "Always carry ₹5,000–10,000 equivalent in local cash for emergencies. Keep a second card in a separate bag. Note your bank's international helpline number before you fly.",
    color: "bg-orange-50 dark:bg-orange-950/30",
    iconBg: "bg-orange-100 dark:bg-orange-900/50",
    iconText: "text-orange-600 dark:text-orange-400",
    borderColor: "border-l-orange-500"
  },
  {
    emoji: "📱",
    title: "Use Currency Converter & Track Spending",
    description: "Apps like XE Currency or Google can convert on the go. Track daily spending in a notes app. Know your budget limit before you land to avoid overspending.",
    color: "bg-teal-50 dark:bg-teal-950/30",
    iconBg: "bg-teal-100 dark:bg-teal-900/50",
    iconText: "text-teal-600 dark:text-teal-400",
    borderColor: "border-l-teal-500"
  }
];
const PAYMENT_BADGE_COLORS = {
  Essential: "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300",
  "Widely Accepted": "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300",
  Limited: "bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300"
};
function TravelFinance() {
  const [fromCurrency, setFromCurrency] = reactExports.useState("INR");
  const [toCurrency, setToCurrency] = reactExports.useState("USD");
  const [rate, setRate] = reactExports.useState(null);
  const [rateLoading, setRateLoading] = reactExports.useState(false);
  const [rateError, setRateError] = reactExports.useState(false);
  const [lastUpdated, setLastUpdated] = reactExports.useState("");
  const [converterAmount, setConverterAmount] = reactExports.useState("1000");
  const [selectedDestination, setSelectedDestination] = reactExports.useState("US");
  const [tripDays, setTripDays] = reactExports.useState("7");
  const [tripDailyBudget, setTripDailyBudget] = reactExports.useState("");
  const [favorites, setFavorites] = reactExports.useState(() => {
    try {
      return JSON.parse(
        localStorage.getItem("finlit-travel-favorites") || "[]"
      );
    } catch {
      return [];
    }
  });
  const fromCountry = COUNTRIES.find((c) => c.currency === fromCurrency) ?? COUNTRIES[0];
  const toCountry = COUNTRIES.find((c) => c.currency === toCurrency) ?? COUNTRIES[1];
  const destinationCountry = COUNTRIES.find((c) => c.code === selectedDestination) ?? COUNTRIES[1];
  const fetchRate = reactExports.useCallback(async () => {
    var _a;
    if (fromCurrency === toCurrency) {
      setRate(1);
      return;
    }
    setRateLoading(true);
    setRateError(false);
    try {
      const res = await fetch(
        `https://api.frankfurter.app/latest?from=${fromCurrency}&to=${toCurrency}`
      );
      if (!res.ok) throw new Error("API error");
      const data = await res.json();
      const fetched = (_a = data.rates) == null ? void 0 : _a[toCurrency];
      if (typeof fetched === "number") {
        setRate(fetched);
        setLastUpdated((/* @__PURE__ */ new Date()).toLocaleTimeString());
      } else {
        throw new Error("Rate not found");
      }
    } catch {
      const toRateInINR = FALLBACK_RATES[toCurrency] ?? 1;
      const fromRateInINR = FALLBACK_RATES[fromCurrency] ?? 1;
      const fallbackRate = toRateInINR / fromRateInINR;
      setRate(fallbackRate);
      setRateError(true);
      setLastUpdated("(static fallback)");
    } finally {
      setRateLoading(false);
    }
  }, [fromCurrency, toCurrency]);
  reactExports.useEffect(() => {
    fetchRate();
  }, [fetchRate]);
  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };
  const convertedAmount = rate && converterAmount ? (Number.parseFloat(converterAmount) * rate).toFixed(2) : "--";
  const toggleFavorite = (countryCode) => {
    setFavorites((prev) => {
      const updated = prev.includes(countryCode) ? prev.filter((c) => c !== countryCode) : [...prev, countryCode];
      localStorage.setItem("finlit-travel-favorites", JSON.stringify(updated));
      return updated;
    });
  };
  const getINREquivalent = (localAmount, destCurrency) => {
    const destToINR = FALLBACK_RATES[destCurrency] ? 1 / FALLBACK_RATES[destCurrency] : 1;
    return Math.round(localAmount * destToINR);
  };
  const saveBudgetEstimate = () => {
    const days = Number.parseInt(tripDays) || 0;
    const daily = Number.parseFloat(tripDailyBudget) || 0;
    if (!days || !daily) {
      ue.error("Please enter both days and daily budget");
      return;
    }
    const total = days * daily;
    const inrRate = FALLBACK_RATES[destinationCountry.currency] ? 1 / FALLBACK_RATES[destinationCountry.currency] : 1;
    const estimate = {
      country: destinationCountry.name,
      currency: destinationCountry.currency,
      days,
      dailyBudget: daily,
      totalLocal: total,
      totalINR: Math.round(total * inrRate),
      savedAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    const existing = JSON.parse(
      localStorage.getItem("finlit-travel-budgets") || "[]"
    );
    existing.unshift(estimate);
    localStorage.setItem(
      "finlit-travel-budgets",
      JSON.stringify(existing.slice(0, 10))
    );
    ue.success(
      `Budget saved! ${destinationCountry.flag} ${destinationCountry.name} trip: ${destinationCountry.currencySymbol}${total.toLocaleString()} ≈ ₹${Math.round(total * inrRate).toLocaleString()}`
    );
  };
  const favoriteCountries = COUNTRIES.filter((c) => favorites.includes(c.code));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        title: "✈️ Travel Finance",
        subtitle: "Plan your international trips smarter with live exchange rates, cost estimates, and money-saving tips",
        badge: "Global Finance Guide"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 py-10 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto max-w-4xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.55, ease: "easeOut" },
          className: "flex flex-col md:flex-row items-stretch gap-4 md:gap-6",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, x: -20 },
                animate: { opacity: 1, x: 0 },
                transition: { duration: 0.5, delay: 0.1 },
                className: "flex-1 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-6",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3", children: "From" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl mb-2", children: fromCountry.flag }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-xl text-foreground mb-1", children: fromCountry.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-muted-foreground mb-4", children: [
                    fromCountry.currency,
                    " · ",
                    fromCountry.currencySymbol
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: fromCurrency, onValueChange: setFromCurrency, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      SelectTrigger,
                      {
                        "data-ocid": "travel.select",
                        className: "w-full border-blue-200 dark:border-blue-800 focus:ring-blue-400",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: COUNTRIES.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectItem, { value: c.currency, children: [
                      c.flag,
                      " ",
                      c.currency,
                      " — ",
                      c.name
                    ] }, c.currency + c.code)) })
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.button,
              {
                type: "button",
                onClick: swapCurrencies,
                whileHover: { scale: 1.12, rotate: 180 },
                whileTap: { scale: 0.92 },
                transition: { type: "spring", stiffness: 300 },
                className: "bg-white dark:bg-gray-800 rounded-full p-4 shadow-xl text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/40 transition-colors",
                "aria-label": "Swap currencies",
                "data-ocid": "travel.button",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeftRight, { className: "h-6 w-6" })
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, x: 20 },
                animate: { opacity: 1, x: 0 },
                transition: { duration: 0.5, delay: 0.15 },
                className: "flex-1 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-6",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-3", children: "To" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl mb-2", children: toCountry.flag }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-xl text-foreground mb-1", children: toCountry.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-muted-foreground mb-4", children: [
                    toCountry.currency,
                    " · ",
                    toCountry.currencySymbol
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: toCurrency, onValueChange: setToCurrency, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      SelectTrigger,
                      {
                        "data-ocid": "travel.select",
                        className: "w-full border-indigo-200 dark:border-indigo-800 focus:ring-indigo-400",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: COUNTRIES.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectItem, { value: c.currency, children: [
                      c.flag,
                      " ",
                      c.currency,
                      " — ",
                      c.name
                    ] }, c.currency + c.code)) })
                  ] })
                ]
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay: 0.3 },
          className: "mt-6 bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: rateLoading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                className: "flex items-center gap-2 text-white/80",
                "data-ocid": "travel.loading_state",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-5 w-5 animate-spin" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: "Fetching live rate…" })
                ]
              },
              "loading"
            ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, scale: 0.95 },
                animate: { opacity: 1, scale: 1 },
                exit: { opacity: 0 },
                className: "flex items-center gap-2",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-2xl font-bold text-white", children: [
                    fromCountry.flag,
                    " 1 ",
                    fromCurrency,
                    " = ",
                    toCountry.flag,
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-yellow-300", children: rate ? rate.toFixed(4) : "--" }),
                    " ",
                    toCurrency
                  ] }),
                  rateError && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "span",
                    {
                      className: "text-xs text-orange-300 flex items-center gap-1",
                      "data-ocid": "travel.error_state",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-3 w-3" }),
                        " static fallback"
                      ]
                    }
                  )
                ]
              },
              "rate"
            ) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              lastUpdated && !rateLoading && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60 text-xs", children: rateError ? "Static" : `Updated: ${lastUpdated}` }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: fetchRate,
                  disabled: rateLoading,
                  className: "text-white/80 hover:text-white transition-colors p-1.5 rounded-full hover:bg-white/10",
                  "aria-label": "Refresh rate",
                  "data-ocid": "travel.button",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    RefreshCw,
                    {
                      className: `h-4 w-4 ${rateLoading ? "animate-spin" : ""}`
                    }
                  )
                }
              )
            ] })
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-10 space-y-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.section,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-2xl font-bold mb-2 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "h-6 w-6 text-primary" }),
              "Quick Converter"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6 text-sm", children: "Enter an amount to convert between your selected currencies" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "shadow-card max-w-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pt-6 space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { children: [
                  "Amount in ",
                  fromCurrency,
                  " ",
                  fromCountry.flag
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    "data-ocid": "travel.input",
                    type: "number",
                    value: converterAmount,
                    onChange: (e) => setConverterAmount(e.target.value),
                    placeholder: "Enter amount…",
                    min: "0"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted rounded-xl p-4 space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-muted-foreground", children: [
                    fromCountry.flag,
                    " ",
                    fromCurrency
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold", children: [
                    fromCountry.currencySymbol,
                    Number.parseFloat(converterAmount || "0").toLocaleString()
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-muted-foreground", children: [
                    toCountry.flag,
                    " ",
                    toCurrency
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-primary text-lg", children: [
                    toCountry.currencySymbol,
                    Number(convertedAmount).toLocaleString()
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "💡 Tip: Always factor in ~2–3% bank forex charges on top of the displayed rate." })
            ] }) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.section,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.5 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center gap-3 mb-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold", children: "💰 Cost of Living Estimates" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mt-1", children: "Select your destination to see daily cost estimates" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sm:ml-auto w-full sm:w-64", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Select,
                {
                  value: selectedDestination,
                  onValueChange: setSelectedDestination,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { "data-ocid": "travel.select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: COUNTRIES.filter((c) => c.code !== "IN").map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectItem, { value: c.code, children: [
                      c.flag,
                      " ",
                      c.name,
                      " (",
                      c.currency,
                      ")"
                    ] }, c.code)) })
                  ]
                }
              ) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-4", children: [
              {
                label: "Food (daily)",
                emoji: "🍔",
                value: destinationCountry.costOfLiving.food,
                color: "text-orange-500",
                bg: "bg-orange-50 dark:bg-orange-950/20"
              },
              {
                label: "Transport (daily)",
                emoji: "🚕",
                value: destinationCountry.costOfLiving.transport,
                color: "text-blue-500",
                bg: "bg-blue-50 dark:bg-blue-950/20"
              },
              {
                label: "Hotel (per night)",
                emoji: "🏨",
                value: destinationCountry.costOfLiving.hotel,
                color: "text-purple-500",
                bg: "bg-purple-50 dark:bg-purple-950/20"
              },
              {
                label: "Daily Budget",
                emoji: "📅",
                value: destinationCountry.costOfLiving.dailyBudget,
                color: "text-green-500",
                bg: "bg-green-50 dark:bg-green-950/20"
              }
            ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              Card,
              {
                className: `shadow-card border-0 ${item.bg}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pt-5 pb-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl mb-2", children: item.emoji }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `font-bold text-lg ${item.color}`, children: [
                    destinationCountry.currencySymbol,
                    item.value.toLocaleString()
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-0.5", children: item.label }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground mt-1 font-medium", children: [
                    "≈ ₹",
                    getINREquivalent(
                      item.value,
                      destinationCountry.currency
                    ).toLocaleString()
                  ] })
                ] })
              },
              item.label
            )) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.section,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.5 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold mb-2", children: "💳 Payment Methods Guide" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-sm mb-6", children: [
              "How to pay in ",
              destinationCountry.flag,
              " ",
              destinationCountry.name
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4 mb-4", children: [
              {
                icon: "💵",
                label: "Cash",
                level: destinationCountry.paymentMethods.cash
              },
              {
                icon: "💳",
                label: "Card",
                level: destinationCountry.paymentMethods.card
              },
              {
                icon: "📱",
                label: "Digital Wallet",
                level: destinationCountry.paymentMethods.digital
              }
            ].map((method) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "shadow-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pt-5 text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl mb-3", children: method.icon }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-base mb-2", children: method.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: PAYMENT_BADGE_COLORS[method.level], children: method.level })
            ] }) }, method.label)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "shadow-card bg-muted/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "💡 Local Note:" }),
              " ",
              destinationCountry.paymentMethods.notes
            ] }) }) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.section,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.5 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "mb-3 bg-primary/10 text-primary border-primary/20 text-xs font-semibold px-3 py-1", children: "Must-Know Before You Fly" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl md:text-3xl font-bold", children: "Essential Travel Money Tips" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-2 text-sm max-w-2xl mx-auto", children: "6 proven strategies to protect your money and travel smarter — used by experienced Indian travellers" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-5", children: TRAVEL_TIPS.map((tip, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0, y: 16 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { duration: 0.4, delay: i * 0.08 },
                "data-ocid": `travel.item.${i + 1}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Card,
                  {
                    className: `shadow-card h-full border-l-4 ${tip.borderColor} ${tip.color}`,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "pt-5 pb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: `${tip.iconBg} ${tip.iconText} rounded-xl w-12 h-12 flex-shrink-0 flex items-center justify-center text-2xl`,
                          children: tip.emoji
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-base mb-1.5 leading-snug", children: tip.title }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: tip.description })
                      ] })
                    ] }) })
                  }
                )
              },
              tip.title
            )) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.section,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.5 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-2xl font-bold mb-2 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Calculator, { className: "h-6 w-6 text-primary" }),
              "Trip Budget Calculator"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mb-6", children: "Estimate your total trip cost and save it for later" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "shadow-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pt-6 space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Destination Country" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Select,
                    {
                      value: selectedDestination,
                      onValueChange: setSelectedDestination,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { "data-ocid": "travel.select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: COUNTRIES.filter((c) => c.code !== "IN").map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectItem, { value: c.code, children: [
                          c.flag,
                          " ",
                          c.name
                        ] }, c.code)) })
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Number of Days" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        "data-ocid": "travel.input",
                        type: "number",
                        value: tripDays,
                        onChange: (e) => setTripDays(e.target.value),
                        placeholder: "e.g. 7",
                        min: "1"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { children: [
                      "Daily Budget (",
                      destinationCountry.currencySymbol,
                      ")"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        "data-ocid": "travel.input",
                        type: "number",
                        value: tripDailyBudget,
                        onChange: (e) => setTripDailyBudget(e.target.value),
                        placeholder: `e.g. ${destinationCountry.costOfLiving.dailyBudget}`,
                        min: "0"
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    "data-ocid": "travel.save_button",
                    onClick: saveBudgetEstimate,
                    className: "w-full",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "h-4 w-4 mr-2" }),
                      "Save This Estimate"
                    ]
                  }
                )
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "shadow-card bg-primary/5 border-primary/20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pt-6 space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-base", children: "Budget Breakdown" }),
                tripDays && tripDailyBudget ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: [
                    { label: "🏨 Accommodation (40%)", pct: 0.4 },
                    { label: "🍔 Food & Drinks (25%)", pct: 0.25 },
                    { label: "🚕 Transport (20%)", pct: 0.2 },
                    { label: "🎡 Activities / Misc (15%)", pct: 0.15 }
                  ].map((item) => {
                    const total = Number.parseInt(tripDays) * Number.parseFloat(tripDailyBudget);
                    const amt = (total * item.pct).toFixed(0);
                    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: "flex justify-between items-center text-sm",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: item.label }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold", children: [
                            destinationCountry.currencySymbol,
                            Number(amt).toLocaleString()
                          ] })
                        ]
                      },
                      item.label
                    );
                  }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between font-bold text-base", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                      "Total (",
                      destinationCountry.currency,
                      ")"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-primary", children: [
                      destinationCountry.currencySymbol,
                      (Number.parseInt(tripDays) * Number.parseFloat(tripDailyBudget)).toLocaleString()
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm text-muted-foreground", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "≈ Indian Rupees" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-foreground", children: [
                      "₹",
                      getINREquivalent(
                        Number.parseInt(tripDays) * Number.parseFloat(tripDailyBudget),
                        destinationCountry.currency
                      ).toLocaleString()
                    ] })
                  ] })
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "text-center py-8 text-muted-foreground text-sm",
                    "data-ocid": "travel.empty_state",
                    children: "Enter days and daily budget to see your breakdown"
                  }
                )
              ] }) })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.section,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.5 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-2xl font-bold mb-2 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-6 w-6 text-red-500" }),
              "Countries & Favorites"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mb-6", children: "Save countries you plan to visit. Click ❤️ to add/remove." }),
            favoriteCountries.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3", children: "Your Saved Countries" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: favoriteCountries.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Badge,
                {
                  className: "flex items-center gap-1.5 px-3 py-1.5 text-sm bg-primary/10 text-primary border-primary/20 cursor-pointer",
                  onClick: () => toggleFavorite(c.code),
                  "data-ocid": "travel.toggle",
                  children: [
                    c.flag,
                    " ",
                    c.name,
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-500 ml-1", children: "❤️" })
                  ]
                },
                c.code
              )) })
            ] }),
            favoriteCountries.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "text-center py-6 text-muted-foreground text-sm mb-6",
                "data-ocid": "travel.empty_state",
                children: "No favorites yet. Click the heart icon on any country below to save it."
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4", children: COUNTRIES.filter((c) => c.code !== "IN").map((country, i) => {
              const isFav = favorites.includes(country.code);
              const inrRate = FALLBACK_RATES[country.currency] ? (1 / FALLBACK_RATES[country.currency]).toFixed(2) : "N/A";
              return /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { opacity: 0, scale: 0.96 },
                  whileInView: { opacity: 1, scale: 1 },
                  viewport: { once: true },
                  transition: { duration: 0.3, delay: i % 8 * 0.05 },
                  "data-ocid": `travel.item.${i + 1}`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Card,
                    {
                      className: `shadow-card hover:shadow-card-hover transition-shadow cursor-pointer group ${isFav ? "border-red-300 dark:border-red-800" : ""}`,
                      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pt-4 pb-4", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl mb-1", children: country.flag }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-sm", children: country.name }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
                              country.currency,
                              " · ",
                              country.currencySymbol
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground mt-1", children: [
                              "1 ",
                              country.currencySymbol,
                              " ≈ ₹",
                              inrRate
                            ] })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "button",
                            {
                              type: "button",
                              onClick: () => toggleFavorite(country.code),
                              className: "p-1.5 rounded-full hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors",
                              "aria-label": isFav ? "Remove from favorites" : "Add to favorites",
                              "data-ocid": "travel.toggle",
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                                Heart,
                                {
                                  className: `h-4 w-4 transition-colors ${isFav ? "fill-red-500 text-red-500" : "text-muted-foreground group-hover:text-red-400"}`
                                }
                              )
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 pt-2 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
                          "Budget ≈ ",
                          country.currencySymbol,
                          country.costOfLiving.dailyBudget.toLocaleString(),
                          "/day"
                        ] }) })
                      ] })
                    }
                  )
                },
                country.code
              );
            }) })
          ]
        }
      )
    ] })
  ] });
}
export {
  TravelFinance as default
};
