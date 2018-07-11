page.10.variables {
    MAINMENU = HMENU
    MAINMENU {
      1 = TMENU
      1.wrap = <ul class="nav-list-wrapper">|</ul>
      1.NO {
        doNotLinkIt = 1
        wrapItemAndSub (
          <a href="/index.php?id=1" class="first">
              <img src="fileadmin\resources\images\logo.jpg" title="JozeeDesign" alt="Logo" class="logo">
          </a>
          <div class="center">
          <li>|</li> |*| <li>|</li> |*| </div> <li class="last">|</li>
        )
        stdWrap.cObject = CASE
        stdWrap.cObject {
          key.field = doktype
          default = TEXT
          default {
            typolink.parameter.field = uid
            field = title
            stdWrap.htmlSpecialChars = 1
          }
          # pagetype shortcut
          4 = TEXT
          4 {
            field = title
            typolink.parameter.field = shortcut
          }
          # page typo3 external url
          3 = TEXT
          3 {
            field = title
            typolink.parameter.field = url
            typolink.extTarget.field = target
          }
        }
      }
      1.ACT = 1
      1.ACT {
        wrapItemAndSub = <li class="active">|</li>
      }
    }
    MOBILEMENU = HMENU
    MOBILEMENU {
      1 = TMENU
      1.wrap = <ul class="list-wrapper"><div class="flex-wrapper">|</div></ul>
      1.NO {
        doNotLinkIt = 1
        wrapItemAndSub (
          <li class="first">|</li> |*| <li>|</li> |*| <li class="last">|</li>
        )
        stdWrap.cObject = CASE
        stdWrap.cObject {
          key.field = doktype
          default = TEXT
          default {
            typolink.parameter.field = uid
            field = title
            stdWrap.htmlSpecialChars = 1
          }
          # pagetype shortcut
          4 = TEXT
          4 {
            field = title
            typolink.parameter.field = shortcut
          }
          # page typo3 external url
          3 = TEXT
          3 {
            field = title
            typolink.parameter.field = url
            typolink.extTarget.field = target
          }
        }
      }
      1.ACT = 1
      1.ACT {
        wrapItemAndSub = <li class="active">|</li>
      }
    }  
    HEADERSLIDER < styles.content.get
    HEADERSLIDER.select.where = colPos=10

    CONTENT < styles.content.get
    CONTENT.select.where = colPos=20
}