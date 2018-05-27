page = PAGE
page {
        includeCSS {
          file1 = fileadmin\resources\css\main.css
        }
        10 = FLUIDTEMPLATE
        10 {
          file.stdWrap.cObject = CASE
          file.stdWrap.cObject {
            key.data = levelfield:-1, backend_layout_next_level, slide
            key.override.field = backend_layout
            default = TEXT
            default.value = fileadmin\resources\templates\main.html
          }
          variables {
              content < styles.content.get
              content.select.where = colPos=10
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
                }}
          }
        }
}