jQuery( function( $ ) {
	var $imgElem = $( '.is-imgchange' ),
		img_sp = '-sp',
		img_pc = '-pc',
		pcWidth = 769; //break point for PC

	// sp <-> pc
	$( document ).ready( function() {
		$imgElem.each( function() {
			var $this = $( this );
			if( window.innerWidth < pcWidth ) {
				$this.attr( 'src', $this.attr( 'src' ).replace( img_pc, img_sp ) );
			} else {
				$this.attr( 'src', $this.attr( 'src' ).replace( img_sp, img_pc ) );
			}
		} );
	} );

	$imgElem.each( function() {
		var $this = $( this );
		function imgSize() {
			if( window.innerWidth < pcWidth ) {
				$this.attr( 'src', $this.attr( 'src' ).replace( img_pc, img_sp ) );
			} else {
				$this.attr( 'src', $this.attr( 'src' ).replace( img_sp, img_pc ) );
			}
		}
		$( window ).resize( function() { imgSize(); } );
	} );
} );
