$(function () {
	const formatInput = (form, ...styles) => {
		$(form).children().children().addClass(styles);
	};
	const deFormatInput = (form, ...styles) => {
		$(form).children().children().removeClass(styles);
	};

	let forms = [...$('form')];
	forms.forEach((form) => {
		$(form).on('submit', (event) => {
			event.preventDefault();
			if ($(form).attr('id') == 'formEstaTienda') {
				formatInput('#formEstaTienda', 'bg-success', 'text-white');
				deFormatInput('#formOtrasTiendas', 'bg-warning', 'text-danger');
				deFormatInput('#formOnline', 'bg-primary-subtle', 'text-info');
			} else if ($(form).attr('id') == 'formOtrasTiendas') {
				formatInput('#formOtrasTiendas', 'bg-warning', 'text-danger');
				deFormatInput('#formEstaTienda', 'bg-success', 'text-white');
				deFormatInput('#formOnline', 'bg-primary-subtle', 'text-info');
			} else if ($(form).attr('id') == 'formOnline') {
				deFormatInput('#formEstaTienda', 'bg-success', 'text-white');
				deFormatInput('#formOtrasTiendas', 'bg-warning', 'text-danger');
				formatInput('#formOnline', 'bg-primary-subtle', 'text-info');
			}
		});
	});
});
