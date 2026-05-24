$(function () {

    $("#contactForm input, #contactForm textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function ($form, event, errors) {
        },
        submitSuccess: function ($form, event) {
            event.preventDefault();
            var name = $("input#name").val();
            var email = $("input#email").val();
            var subject = $("input#subject").val();
            var message = $("textarea#message").val();
    
            // Monta a string no formato desejado
            var messageString = "Meu nome: " + name + "; Minha mensagem: " + message;
    
            // Codifica a string para garantir que caracteres especiais não quebrem o link
            var encodedMessage = encodeURIComponent(messageString);
    
            // Cria o link do WhatsApp com a string montada
            var whatsappLink = "https://api.whatsapp.com/send/?phone=5514996862804&text=" + encodedMessage + "&type=phone_number&app_absent=0";
    
            // Redireciona para o link do WhatsApp
            window.open(whatsappLink, "_blank");
    
            // Desativa o botão durante o processo
            $this = $("#sendMessageButton");
            $this.prop("disabled", true);
    
            // Reseta o formulário
            $('#contactForm').trigger("reset");
    
            // Reabilita o botão após um pequeno delay
            setTimeout(function () {
                $this.prop("disabled", false);
            }, 1000);
        },
        filter: function () {
            return $(this).is(":visible");
        },
    });
    

    $("a[data-toggle=\"tab\"]").click(function (e) {
        e.preventDefault();
        $(this).tab("show");
    });
});

$('#name').focus(function () {
    $('#success').html('');
});
