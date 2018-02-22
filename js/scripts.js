( function() {

	if ( typeof HTMLDialogElement === 'function' ) {

		const loginButton = document.querySelector( '[href="#login"]' ),
			closeLoginButton = document.querySelector( 'dialog > a' )

		loginButton.addEventListener( 'click', openDialog )
		closeLoginButton.addEventListener( 'click', closeDialog )

	}

	function openDialog( e ) {

		e.preventDefault()

		const dialog = document.querySelector( 'dialog' )
		dialog.showModal()

	}

	function closeDialog( e ) {

		e.preventDefault()

		const dialog = document.querySelector( 'dialog' ),
			loginButton = document.querySelector( '[href="#login"]' )

		dialog.close()
		loginButton.focus()

	}

	const input = Array.from( document.querySelectorAll( 'article > input' ) )

	input.forEach( el => {

		el.addEventListener( 'click', function() {

			this.parentNode.classList.toggle( 'show' )

		} )

	} )

} )()