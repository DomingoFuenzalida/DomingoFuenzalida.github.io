document.addEventListener("DOMContentLoaded", function() {
    // Seleccionar el botón de submit
    var submitButton = document.getElementById("button-addon2");

    // Agregar un evento de clic al botón de submit
    submitButton.addEventListener("click", function() {
        // Obtener el valor del comentario
        var commentInput = document.querySelector('input[aria-label="commentaries"]');
        var commentValue = commentInput.value;

        // Crear un nuevo elemento de párrafo para el comentario
        var newComment = document.createElement("h4");
        newComment.textContent = commentValue;

        // Agregar una clase a los comentarios
        newComment.classList.add("comment");

        // Insertar el comentario justo debajo de la barra
        var commentsContainer = document.querySelector('.input-group.mb-3');
        commentsContainer.parentNode.insertBefore(newComment, commentsContainer.nextSibling);

        // Limpiar el valor del input después de agregar el comentario
        commentInput.value = "";
    });
});