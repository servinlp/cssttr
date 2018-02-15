( function() {

	if ( typeof HTMLDialogElement === 'function' ) {

		const loginButton = document.querySelector( '[href="#login"]' ),
			closeLoginButton = document.querySelector( 'dialog > button' )

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

		const dialog = document.querySelector( 'dialog' )
		dialog.close()

	}

} )()