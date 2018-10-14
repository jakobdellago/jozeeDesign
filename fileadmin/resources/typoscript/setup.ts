<INCLUDE_TYPOSCRIPT: source="FILE:fileadmin/resources/typoscript/page.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:fileadmin/resources/typoscript/variables/variables.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:fileadmin/resources/typoscript/libs.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:fileadmin/resources/typoscript/mask/fluidtemplates.ts">

#config.baseURL = http://www.jozeedesign.at/
#config.tx_cooluri_enable = 1
#config.redirectOldLinksToNew = 1

#REALURL CONFIGURATION
 config.tx_realurl_enable = 1
 config.absRefPrefix = /
 # dont forget to set the allowed range, here 0-3; otherwise anything else could be inserted
 config.linkVars = L(0)
