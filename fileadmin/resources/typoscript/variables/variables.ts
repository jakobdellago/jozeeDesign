page.10.variables {
    MAINMENU = HMENU
    MAINMENU {
      1 = TMENU
      1.wrap = <ul class="nav-list-wrapper">|</ul>
      1.NO {
        doNotLinkIt = 1
        wrapItemAndSub (
          <a href="http://www.jozeedesign.at" class="first">
            <img src="http://www.jozeedesign.at/fileadmin/resources/images/logo_330.jpg"
                title="jozeeDesign"
                alt="jozeeDesign"
                srcset="fileadmin/resources/images/logo_150.jpg, 
                    fileadmin/resources/images/logo_300.jpg 2x,
                    fileadmin/resources/images/logo_450.jpg 3x"
            />
          </a>
          <div class="center"> 
          <li>|</li> |*| <li>|</li> |*| </div><li class="last">|</li>
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
      #1.ACT = 1
      #1.ACT {
      #  wrapItemAndSub = <li class="active">|</li>
      #}
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

    SMALL_SLIDER < styles.content.get
    SMALL_SLIDER {

        select {

        # The page with ID = 123 is the source.
        pidInList = 8

        # Sorting is the same as in the backend.
        orderBy = sorting

        # Only select the content of the left column.
        where = {#colPos}=0

        # Define the field with the language ID in tt_content.
        languageField = sys_language_uid
        
        }
    }
}