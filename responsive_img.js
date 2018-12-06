jQuery( function( $ ) {
	let $imgElem = $( '.is-imgchange' ),
		img_sp = '-sp',
		img_pc = '-pc',
		pcWidth = 769; //break point for PC

	// sp <-> pc
	$( document ).ready( function() {
		$imgElem.each( function() {
			let $this = $( this );
			let resizedWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
			if( resizedWidth < pcWidth ) {
				$this.attr( 'src', $this.attr( 'src' ).replace( img_pc, img_sp ) );
			} else {
				$this.attr( 'src', $this.attr( 'src' ).replace( img_sp, img_pc ) );
			}
		} );
	} );

} );
