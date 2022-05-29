    class userioOperaciones{

        public void crearUsuario(String nombre, String apellido, String email, String contraseña){
            Usuario usuario = new Usuario();
            usuario.setNombre(nombre);
            usuario.setApellido(apellido);
            usuario.setEmail(email);
            usuario.setPassword(contraseña);
            usuario.setEstado(true);
          BD.guardarUsuario(usuario);
        }

        public void editarUsuario(idUsuario,String nombre, String apellido, String email, String contraseña){

            Usuario usuario = new Usuario();
            usuario=BD.obtenerUsuario(idUsuario);
            usuario.setNombre(nombre);
            usuario.setApellido(apellido);
            usuario.setEmail(email);
            usuario.setPassword(contraseña);
            BD.actualizarUsuario(usuario);
        }

        public void eliminarUsuario(idUsuario){
            Usuario usuario = new Usuario();
            usuario=BD.obtenerUsuario(idUsuario);
            usuario.setEstado(false);
            BD.actualizarUsuario(usuario);
        }
    }

    