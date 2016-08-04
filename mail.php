<?php
//если форм несколько в индекс добавляем <input display none name="formname" value="С какой формы"> добавляем тут переменную $formname
//перед popup чтобы выдавать разный текст на заявке .click(function{ ().html("текст который вставаить/$(this).text() - назвние кнопки")})
/*	$(".homesect .section-bottom .buttons").click(function() {
		$("#callback h4").html($(this).text());
		$("#callback input[name=formname]").val($(this).text());
	}).magnificPopup({
		type:"inline",
		mainClass: 'mfp-forms'
	}); */
$recepient = "aleksey.b1@mail.ru";
$sitename = "Миньоны";

$name = trim($_GET["name"]);
$phone = trim($_GET["phone"]);

$pagetitle = "Новая заявка с сайта \"$sitename\"";
$message = "Имя: $name \nТелефон: $phone ";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");