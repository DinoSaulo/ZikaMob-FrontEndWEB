$(document).ready(function() {
    $(".mensagens").hide();
    $(".acompanhamento").hide();
    $(".consultar-ranking").hide();

    $(".btn-acompanhamento").click(function() {
        $(".mensagens").hide();
        $(".consultar-ranking").hide();
        $(".acompanhamento").show();
    });

    $(".btn-mensagens").click(function() {
        $(".acompanhamento").hide();
        $(".consultar-ranking").hide();
        $(".mensagens").show();
    });

    $(".btn-consultar-ranking").click(function() {
        $(".acompanhamento").hide();
        $(".mensagens").hide();
        $(".consultar-ranking").show();
    });
});