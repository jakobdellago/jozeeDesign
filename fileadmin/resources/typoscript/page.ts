page = PAGE
page {
        config.contentObjectExceptionHandler = 0
        
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