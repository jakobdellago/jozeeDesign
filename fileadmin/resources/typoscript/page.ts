page = PAGE
page {
        typeNum = 0
        config.contentObjectExceptionHandler = 0
        
        includeCSS {
          file1 = fileadmin/resources/css/main.css
        }
        headerData {
            10 = TEXT
            10.value = <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=yes">
            
            #Favicons BEGIN
            20 = TEXT
            20.value = <link rel="apple-touch-icon" sizes="180x180" href="/fileadmin/resources/images/favicons/apple-touch-icon.png">
            30 = TEXT
            30.value = <link rel="icon" type="image/png" sizes="32x32" href="/fileadmin/resources/images/favicons/favicon-32x32.png">
            40 = TEXT
            40.value = <link rel="icon" type="image/png" sizes="16x16" href="/fileadmin/resources/images/favicons/favicon-16x16.png">
            50 = TEXT
            50.value = <link rel="manifest" href="/fileadmin/resources/images/favicons/site.webmanifest">
            60 = TEXT
            60.value = <link rel="mask-icon" href="/fileadmin/resources/images/favicons/safari-pinned-tab.svg" color="#5bbad5">
            70 = TEXT
            70.value = <link rel="shortcut icon" href="/fileadmin/resources/images/favicons/favicon.ico">
            80 = TEXT
            80.value = <meta name="msapplication-TileColor" content="#da532c">
            90 = TEXT
            90.value = <meta name="msapplication-config" content="/fileadmin/resources/images/favicons/browserconfig.xml">
            100 = TEXT
            100.value = <meta name="theme-color" content="#ffffff">
            #Favicons END
        }
        10 = FLUIDTEMPLATE
        10 {
            file.stdWrap.cObject = CASE
            file.stdWrap.cObject {
                key.data = levelfield:-1, backend_layout_next_level, slide
                key.override.field = backend_layout
                default = TEXT
                default.value = fileadmin/resources/templates/home.html
            }

            partialRootPaths {
                10 = fileadmin/resources/templates/partials
            }

            dataProcessing.10 = TYPO3\CMS\Frontend\DataProcessing\DatabaseQueryProcessor
            dataProcessing.10 {
                # regular if syntax
                # if.isTrue.field = records

                # the table name from which the data is fetched from
                # + stdWrap
                table = tt_content

                # All properties from .select can be used directly
                # + stdWrap
                colPos = 0
                pidInList = 8

                # The target variable to be handed to the ContentObject again, can
                # be used in Fluid e.g. to iterate over the objects. defaults to
                # "records" when not defined
                # + stdWrap
                as = products

                # The fetched records can also be processed by DataProcessors.
                # All configured processors are applied to every row of the result.
                dataProcessing {
                    10 = TYPO3\CMS\Frontend\DataProcessing\FilesProcessor
                    10 {
                        references.fieldName = image
                    }
                }
            }
        }
}