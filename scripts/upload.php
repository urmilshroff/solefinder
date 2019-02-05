if(isset($_FILES['files'])){

    for($i=0;$i<count($_FILES['files']['name']);$i++){
        foreach($_FILES['files'] as $v=>$file) {
            $errors = array();
            $file_name = $_FILES['files']['name'][$i];
            $file_size = $_FILES['files']['size'][$i];
            $file_tmp = $_FILES['files']['tmp_name'][$i];
            $file_type = $_FILES['files']['type'][$i];
            $file_ext = strtolower(end(explode('.',$_FILES['files']['name'][$i])));

            $extensions = array("jpeg","jpg","png","docx","doc","pdf");

            if(in_array($file_ext,$extensions) === true){
                move_uploaded_file($file_tmp,"../../site/assets/files."/".strtolower($sanitizer->name($file_name)));

            }
        }
    }
}