lib.getProducts = CONTENT
lib.getProducts {
  table = tt_content
  select {
    pidInList = 8 
  }
  renderObj = COA
  renderObj {
  	wrap = <div class="product-list">|</div>

  	10 = TEXT 
  	10.field = header
  	10.wrap = <h2>|</h2>

  	20 = TEXT
  	20.field = tx_mask_price
  	20.wrap = <span>|&nbsp;Euro</span>
  }
}

lib.getProduct = CONTENT
lib.getProduct {
	table = tt_content
	select {
    	pidInList = 8 
    	uidInList.current = 1
    	max = 1
  	}
  	renderObj = COA
    renderObj {
	  	wrap = <div class="product">|</div>

	  	10 = TEXT 
	  	10.field = header
	  	10.wrap = <h2>|</h2>

	  	20 = TEXT
	  	20.field = tx_mask_price
	  	20.wrap = <span>|&nbsp;Euro</span>
    }
}

lib.spaceToHexa20 = TEXT
lib.spaceToHexa20 {
  value.current = 1
  stdWrap.replacement {
    10 {
        search.char = 32
        replace = %20
    }
  }
}
