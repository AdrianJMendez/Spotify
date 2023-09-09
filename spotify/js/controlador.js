function verPlaylist(codigoPlaylist){
    console.log('Ver playlist con codigo: ' + codigoPlaylist);
    $("#vista-playlist").show();
    $("#vista-artista").hide();
}

function verArtista(codigoArtista){
    console.log('Ver artista con codigo: ' + codigoArtista);
    $("#vista-artista").show();
    $("#vista-playlist").hide();
}

function agregarCancion(codigoCancion){
    console.log("Agregar cancion "+codigoCancion);
    $("#modal-playlists").modal('show');
}

//renderizar usuario
renderUsuario();
function renderUsuario(){
    document.getElementById('usuarios').innerHTML = ``;
    fetch('http://localhost:8000/users').then(response => response.json())
    .then(data => {
      if (data.status) {
        const usuarios = data.usuarios;  
        const opcionesHTML = usuarios.map(usuario => {
          return `<option value="${usuario._id}">${usuario.nombreUsuario}</option>`;
        }).join('');
  
        document.getElementById('usuarios').innerHTML = opcionesHTML;

      } else {
        console.log('No se encontraron usuarios:', data.message);
      }
    });
}

//seleccionar usuario
function seleccionarUsuario() {
    var select = document.getElementById('usuarios');
    select.addEventListener('change', function() {
        var usuarioSeleccionado = this.options[this.selectedIndex];
        var _id = usuarioSeleccionado.value;
        renderPlaylistPorUsuario(_id);
        var nombreUsuario = usuarioSeleccionado.text;
        localStorage.setItem('_id', _id);
    });
}

seleccionarUsuario();

//renderizar playlists por artista
function renderPlaylistPorUsuario(_id){
  document.getElementById('playlist').innerHTML = ' ';
  fetch(`http://localhost:8000/users/${_id}/playlists`).then(response => response.json())
  .then(data => {
    if (data.status) {
      const playlists = data.usuario.playlists;  
      const opcionesHTML = playlists.map((playlist, index) => {
        return `<li class="nav-item"><div class="nav-link" onclick="verPlaylist(${index})"><i class="fas fa-play"></i> ${playlist.tituloPlaylist}</div></li>`;
      }).join('');


      document.getElementById('playlist').innerHTML = `<h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
      <span>playlists</span>
      <a class="d-flex align-items-center text-muted" href="#">
        <span data-feather="plus-circle"></span>
      </a>
    </h6>` + opcionesHTML;
    
    } else {
      console.log('No se encontraron usuarios:', data.message);
    }
  });
}

//renderizar lista de artistas

function renderArtista(){
  fetch('http://localhost:8000/artist').then(response => response.json())
  .then(data => {
    if (data.status) {
      const usuarios = data.usuarios;  
      const opcionesHTML = usuarios.map((usuario,index) => {
        return `<li class="nav-item"><div class="nav-link" onclick="verArtista(${index})"><i class="fas fa-music"></i> ${usuario.nombreArtista}</div></li>`;
      }).join('');

      document.getElementById('Artista').innerHTML = opcionesHTML;
    } else {
      console.log('No se encontraron usuarios:', data.message);
    }
  });
}
renderArtista();
