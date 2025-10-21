/* eslint-disable prettier/prettier */
import Registry from "@4i4/registry";
import dynamic from "next/dynamic";
import buttonsSetting from "./settings/buttons";
import breakpointsSetting from "./settings/breakpoints";
import gridSetting from "./settings/grid";
import paletteSetting from "./settings/palette";

const registry = new Registry();

// Settings
registry.set("palette", paletteSetting, "_settings");
registry.set("breakpoints", breakpointsSetting, "_settings");
registry.set("buttons", buttonsSetting, "_settings");
registry.set("grid", gridSetting, "_settings");

// Blocks
registry.set("hero--layout-03", dynamic(() => import("./templates/blocks/hero/layout-03"), {}), "blocks");
registry.set("hero--layout-02", dynamic(() => import("./templates/blocks/hero/layout-02"), {}), "blocks");
registry.set("hero--layout-01", dynamic(() => import("./templates/blocks/hero/layout-01"), {}), "blocks");
registry.set("about--layout-04", dynamic(() => import("./templates/blocks/about/layout-04"), {}), "blocks");
registry.set("about--layout-03", dynamic(() => import("./templates/blocks/about/layout-03"), {}), "blocks");
registry.set("about--layout-02", dynamic(() => import("./templates/blocks/about/layout-02"), {}), "blocks");
registry.set("about--layout-01", dynamic(() => import("./templates/blocks/about/layout-01"), {}), "blocks");

// Components
registry.set("links", dynamic(() => import("./templates/components/links"), {}), "components");
registry.set("link", dynamic(() => import("./templates/components/link"), {}), "components");
registry.set("headline", dynamic(() => import("./templates/components/headline"), {}), "components");
registry.set("card--layout-04", dynamic(() => import("./templates/components/card/layout-04"), {}), "components");
registry.set("card--layout-03", dynamic(() => import("./templates/components/card/layout-03"), {}), "components");
registry.set("card--layout-02", dynamic(() => import("./templates/components/card/layout-02"), {}), "components");
registry.set("card--layout-01", dynamic(() => import("./templates/components/card/layout-01"), {}), "components");
registry.set("card--layout-00", dynamic(() => import("./templates/components/card/layout-00"), {}), "components");
registry.set("card", dynamic(() => import("./templates/components/card"), {}), "components");
registry.set("box", dynamic(() => import("./templates/components/box"), {}), "components");

// Form-field
registry.set("wrapper--select", dynamic(() => import("./templates/form-field/wrapper/select"), {}), "form-field");
registry.set("wrapper", dynamic(() => import("./templates/form-field/wrapper"), {}), "form-field");
registry.set("wrapper--checkboxes", dynamic(() => import("./templates/form-field/wrapper/checkboxes"), {}), "form-field");
registry.set("wrapper--checkbox", dynamic(() => import("./templates/form-field/wrapper/checkbox"), {}), "form-field");
registry.set("textfield", dynamic(() => import("./templates/form-field/textfield"), {}), "form-field");
registry.set("textarea", dynamic(() => import("./templates/form-field/textarea"), {}), "form-field");
registry.set("select", dynamic(() => import("./templates/form-field/select"), {}), "form-field");
registry.set("radios", dynamic(() => import("./templates/form-field/radios"), {}), "form-field");
registry.set("password", dynamic(() => import("./templates/form-field/password"), {}), "form-field");
registry.set("number", dynamic(() => import("./templates/form-field/number"), {}), "form-field");
registry.set("label", dynamic(() => import("./templates/form-field/label"), {}), "form-field");
registry.set("input-group--tags", dynamic(() => import("./templates/form-field/input-group/tags"), {}), "form-field");
registry.set("input-group--suffix", dynamic(() => import("./templates/form-field/input-group/suffix"), {}), "form-field");
registry.set("input-group--prefix", dynamic(() => import("./templates/form-field/input-group/prefix"), {}), "form-field");
registry.set("input-group--input", dynamic(() => import("./templates/form-field/input-group/input"), {}), "form-field");
registry.set("input-group", dynamic(() => import("./templates/form-field/input-group"), {}), "form-field");
registry.set("input-group--expand", dynamic(() => import("./templates/form-field/input-group/expand"), {}), "form-field");
registry.set("error", dynamic(() => import("./templates/form-field/error"), {}), "form-field");
registry.set("email", dynamic(() => import("./templates/form-field/email"), {}), "form-field");
registry.set("description", dynamic(() => import("./templates/form-field/description"), {}), "form-field");
registry.set("checkboxes", dynamic(() => import("./templates/form-field/checkboxes"), {}), "form-field");
registry.set("checkbox", dynamic(() => import("./templates/form-field/checkbox"), {}), "form-field");

// Icons
registry.set("zoomout", dynamic(() => import("./templates/icons/zoomout"), {}), "icons");
registry.set("zoom", dynamic(() => import("./templates/icons/zoom"), {}), "icons");
registry.set("twitter", dynamic(() => import("./templates/icons/twitter"), {}), "icons");
registry.set("trash", dynamic(() => import("./templates/icons/trash"), {}), "icons");
registry.set("tiktok", dynamic(() => import("./templates/icons/tiktok"), {}), "icons");
registry.set("survey", dynamic(() => import("./templates/icons/survey"), {}), "icons");
registry.set("success", dynamic(() => import("./templates/icons/success"), {}), "icons");
registry.set("search", dynamic(() => import("./templates/icons/search"), {}), "icons");
registry.set("screening", dynamic(() => import("./templates/icons/screening"), {}), "icons");
registry.set("plus", dynamic(() => import("./templates/icons/plus"), {}), "icons");
registry.set("plus-circle", dynamic(() => import("./templates/icons/plus-circle"), {}), "icons");
registry.set("open-hours", dynamic(() => import("./templates/icons/open-hours"), {}), "icons");
registry.set("map_2", dynamic(() => import("./templates/icons/map_2"), {}), "icons");
registry.set("map", dynamic(() => import("./templates/icons/map"), {}), "icons");
registry.set("map-uzb", dynamic(() => import("./templates/icons/map-uzb"), {}), "icons");
registry.set("mail", dynamic(() => import("./templates/icons/mail"), {}), "icons");
registry.set("logo", dynamic(() => import("./templates/icons/logo"), {}), "icons");
registry.set("loader", dynamic(() => import("./templates/icons/loader"), {}), "icons");
registry.set("link", dynamic(() => import("./templates/icons/link"), {}), "icons");
registry.set("instagram", dynamic(() => import("./templates/icons/instagram"), {}), "icons");
registry.set("info", dynamic(() => import("./templates/icons/info"), {}), "icons");
registry.set("funding", dynamic(() => import("./templates/icons/funding"), {}), "icons");
registry.set("footer-logo", dynamic(() => import("./templates/icons/footer-logo"), {}), "icons");
registry.set("flow-step-7", dynamic(() => import("./templates/icons/flow-step-7"), {}), "icons");
registry.set("flow-step-6", dynamic(() => import("./templates/icons/flow-step-6"), {}), "icons");
registry.set("flow-step-5", dynamic(() => import("./templates/icons/flow-step-5"), {}), "icons");
registry.set("flow-step-4", dynamic(() => import("./templates/icons/flow-step-4"), {}), "icons");
registry.set("flow-step-3", dynamic(() => import("./templates/icons/flow-step-3"), {}), "icons");
registry.set("flow-step-2", dynamic(() => import("./templates/icons/flow-step-2"), {}), "icons");
registry.set("flow-step-1", dynamic(() => import("./templates/icons/flow-step-1"), {}), "icons");
registry.set("filter", dynamic(() => import("./templates/icons/filter"), {}), "icons");
registry.set("failure", dynamic(() => import("./templates/icons/failure"), {}), "icons");
registry.set("facebook", dynamic(() => import("./templates/icons/facebook"), {}), "icons");
registry.set("edit", dynamic(() => import("./templates/icons/edit"), {}), "icons");
registry.set("download", dynamic(() => import("./templates/icons/download"), {}), "icons");
registry.set("curved-arrow", dynamic(() => import("./templates/icons/curved-arrow"), {}), "icons");
registry.set("contacts", dynamic(() => import("./templates/icons/contacts"), {}), "icons");
registry.set("computer", dynamic(() => import("./templates/icons/computer"), {}), "icons");
registry.set("close", dynamic(() => import("./templates/icons/close"), {}), "icons");
registry.set("chat", dynamic(() => import("./templates/icons/chat"), {}), "icons");
registry.set("calendar", dynamic(() => import("./templates/icons/calendar"), {}), "icons");
registry.set("block-arrow", dynamic(() => import("./templates/icons/block-arrow"), {}), "icons");
registry.set("bell", dynamic(() => import("./templates/icons/bell"), {}), "icons");
registry.set("arrow", dynamic(() => import("./templates/icons/arrow"), {}), "icons");
registry.set("arrow-direction", dynamic(() => import("./templates/icons/arrow-direction"), {}), "icons");
registry.set("address", dynamic(() => import("./templates/icons/address"), {}), "icons");

// Layout
registry.set("row", dynamic(() => import("./templates/layout/row"), {}), "layout");
registry.set("page", dynamic(() => import("./templates/layout/page"), {}), "layout");
registry.set("layout--region", dynamic(() => import("./templates/layout/layout/region"), {}), "layout");
registry.set("layout--4col", dynamic(() => import("./templates/layout/layout/4col"), {}), "layout");
registry.set("layout--3col", dynamic(() => import("./templates/layout/layout/3col"), {}), "layout");
registry.set("layout--2col", dynamic(() => import("./templates/layout/layout/2col"), {}), "layout");
registry.set("layout--1col", dynamic(() => import("./templates/layout/layout/1col"), {}), "layout");
registry.set("header--layout-02", dynamic(() => import("./templates/layout/header/layout-02"), {}), "layout");
registry.set("header--layout-01", dynamic(() => import("./templates/layout/header/layout-01"), {}), "layout");
registry.set("divider", dynamic(() => import("./templates/layout/divider"), {}), "layout");
registry.set("container--wide", dynamic(() => import("./templates/layout/container/wide"), {}), "layout");
registry.set("container--narrow", dynamic(() => import("./templates/layout/container/narrow"), {}), "layout");
registry.set("container", dynamic(() => import("./templates/layout/container"), {}), "layout");
registry.set("col", dynamic(() => import("./templates/layout/col"), {}), "layout");

// Page
registry.set("default", dynamic(() => import("./templates/page/default"), {}), "page");

export default registry;
