tt_content {
	# Slideshow
	mask_product_list = FLUIDTEMPLATE
	mask_product_list {
		
		file = fileadmin\resources\templates\mask\content\product_list.html
 
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
	        recursive = 1

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

	mask_product_list_small = FLUIDTEMPLATE
	mask_product_list_small {
	
		file = fileadmin\resources\templates\mask\content\product_list_small.html

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

	mask_product_link = FLUIDTEMPLATE
	mask_product_link {
		
		file = fileadmin\resources\templates\mask\content\product_link.html
 
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