            145 = TEXT
            145.value = <div>TEST</div>

            200 = FILES
            200 {
              references {
                table = tt_content
                fieldName = image
              }
              renderObj = IMAGE
              renderObj {
                wrap = <meta>|</meta>
                file {
                  import.data = file:current:publicUrl
                  width = 200c
                  height = 200c
                }
              }
            }


 180 = FILES
            180 {
                references {
                    table = tt_content
                    uid.data = field:uid
                    fieldName = ogimage
                }
                renderObj = TEXT
                renderObj {
                    typolink{
                        parameter.stdWrap{
                            cObject = IMG_RESOURCE
                            cObject{
                                file.import.data = file:current:uid
                                file.treatIdAsReference = 1
                                file.height < plugin.tx_csseo.social.openGraph.image.height
                                file.width < plugin.tx_csseo.social.openGraph.image.width
                            }
                        }
                        returnLast = url
                        forceAbsoluteUrl = 1
                    }
                    wrap = <meta property="og:test" content="|" />
                }
            }


            ##worked partly
            170 < styles.content.get
            170.renderObj = COA
            170.renderObj {

                  #Bild auslesen
                  20 = FILES
                  20 {
                     references {
                        table = tt_content
                        uid.data = field:uid
                        fieldName = testimage
                     }
             
                     renderObj = TEXT
                     renderObj.file.import.data = file:current:uid
                     renderObj.file.treatIdAsReference = 1
                  }
            }

##works
# Gibt die Spalte "normal" (colPos = 0) aus
            170 < styles.content.get
            170.renderObj = COA
            170.renderObj {
               # Jedes Content Element wrappen
               stdWrap.wrap = <meta property="og:imgtest" content="|" />
             
              #Bild auslesen
              20 = FILES
              20 {
                 references {
                    table = tt_content
                    uid.data = field:uid
                    fieldName = image
                 }
                    


                 renderObj = IMG_RESOURCE
                 renderObj.file.import.data = file:current:uid
              }
           }


           ###works even nicer
            # Gibt die Spalte "normal" (colPos = 0) aus
            # Gibt die Spalte "normal" (colPos = 0) aus
            170 < styles.content.get
            170.renderObj = COA
            170.renderObj {
               # Jedes Content Element wrappen
               stdWrap.wrap = <meta property="og:imgtest" content="|" />
                stdWrap.override.field = subheader
                stdWrap.override.if.isTrue.field = subheader
                stdWrap.override.wrap = <h2>Untertitel: |</h2>

              #Bild auslesen
              20 = FILES
              20 {
                 references {
                    table = tt_content
                    uid.data = field:uid
                    fieldName = image
                 }
                    


                 renderObj = IMG_RESOURCE
                 renderObj.file.import.data = file:current:uid
              }
           }


##WOOOORKS BEST!!
                       # Gibt die Spalte "normal" (colPos = 0) aus
            # Gibt die Spalte "normal" (colPos = 0) aus
            170 < styles.content.get
            170.renderObj = COA
            170.renderObj {
               # Jedes Content Element wrappen
               stdWrap.wrap = <meta property="og:imgtest" content="|" />
                stdWrap.override = http://www.jozeedesign.at/fileadmin/resources/images/logo_color.png
                stdWrap.override.if.value.field = CType
                stdWrap.override.if.equals = mask_product
                stdWrap.override.if.negate = 1

              #Bild auslesen
              20 = FILES
              20 {
                 references {
                    table = tt_content
                    uid.data = field:uid
                    fieldName = image
                 }
                    


                 renderObj = IMG_RESOURCE
                 renderObj.file.import.data = file:current:uid
              }
           }
        