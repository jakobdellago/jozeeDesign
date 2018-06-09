page = PAGE
page {
        includeCSS {
          file1 = fileadmin\resources\css\main.css
        }
        headerData {
            10 = TEXT
            10.value = <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=yes">
            #dont work as it should
            20 = TEXT
            20.value = <title>JozeeDesign</title>
        }
        10 = FLUIDTEMPLATE
        10 {
          file.stdWrap.cObject = CASE
          file.stdWrap.cObject {
            key.data = levelfield:-1, backend_layout_next_level, slide
            key.override.field = backend_layout
            default = TEXT
            default.value = fileadmin\resources\templates\home.html
          }
        }
}