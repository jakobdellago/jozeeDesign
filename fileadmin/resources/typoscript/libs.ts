lib.renderLink = TEXT
lib.renderLink {
	value = <span>mehr</span><i class="icon-arrow-right"></i>
	typolink {
		parameter.current = 1
		title = button
	}
}

lib.getProducts < styles.content.get
lib.getProducts {
  select {
    pidInList = 8 
  }
}