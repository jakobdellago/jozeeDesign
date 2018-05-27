
# Default PAGE object:
page = PAGE
page.includeCSS {
  file1 = fileadmin\resources\css\main.css
}
page.10 = FLUIDTEMPLATE
page.10 {
  file = fileadmin\resources\templates\main.html  
  variables {
    content < styles.content.get
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
  }
}

lib.LOGO = IMAGE
lib.LOGO {
  file = fileadmin\images\logo.jpg
  stdWrap.typolink.parameter = 1
}
