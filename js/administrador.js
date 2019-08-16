$(document).ready(function() {
    $(".adicionar-componentes").hide();
    $(".editar-componentes").hide();
    $(".aprovar-componentes").hide();
    $(".consultar-ranking").hide();
    $(".remover-componentes").hide();

    $(".btn-adicionar-componentes").click(function() {
        $(".editar-componentes").hide();
        $(".aprovar-componentes").hide();
        $(".consultar-ranking").hide();
        $(".remover-componentes").hide();
        $(".adicionar-componentes").show();
    });

    $(".btn-editar-componentes").click(function() {
        $(".adicionar-componentes").hide();
        $(".aprovar-componentes").hide();
        $(".consultar-ranking").hide();
        $(".remover-componentes").hide();
        $(".editar-componentes").show();
    });

    $(".btn-aprovar-componentes").click(function() {
        $(".adicionar-componentes").hide();
        $(".editar-componentes").hide();
        $(".consultar-ranking").hide();
        $(".remover-componentes").hide();
        $(".aprovar-componentes").show();
    });

    $(".btn-consultar-ranking").click(function() {
        $(".adicionar-componentes").hide();
        $(".editar-componentes").hide();
        $(".aprovar-componentes").hide();
        $(".remover-componentes").hide();
        $(".consultar-ranking").show();
    });

    $(".btn-remover-componentes").click(function() {
        $(".adicionar-componentes").hide();
        $(".editar-componentes").hide();
        $(".aprovar-componentes").hide();
        $(".consultar-ranking").hide();
        $(".remover-componentes").show();
    });
});