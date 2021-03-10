export class Documento {
  constructor(
    int_ente: number,
    int_tipo_identifica: number,
    str_num_identifica: string,
    str_documento_id: string,
    str_referencia: string,
    str_tipo_documento: string,
    str_subtipo_documento: string,
    int_sistema: number,
    int_oficina: number,
    int_perfil: number,
    str_path_repositorio: string,
    str_modelo_doc_alfresco: string,
    str_nombre: string,
    str_observacion: string,
    str_doc_extencion: string,
    file_bytes: string,
    dtt_metadatos: [],
    str_usuario: string,
    str_terminal: string,
    str_sesion: string,
    str_mac: string,
  ) {
    this.int_ente = int_ente;
    this.int_tipo_identifica = int_tipo_identifica;
    this.str_num_identifica = str_num_identifica;
    this.str_documento_id = str_documento_id;
    this.str_referencia = str_referencia;
    this.str_tipo_documento = str_tipo_documento;
    this.str_subtipo_documento = str_subtipo_documento;
    this.int_sistema = int_sistema;
    this.int_oficina = int_oficina;
    this.int_perfil = int_perfil;
    this.str_path_repositorio = str_path_repositorio;
    this.str_modelo_doc_alfresco = str_modelo_doc_alfresco;
    this.str_nombre = str_nombre;
    this.str_observacion = str_observacion;
    this.str_doc_extencion = str_doc_extencion;
    this.file_bytes = file_bytes;
    this.dtt_metadatos = dtt_metadatos;
    this.str_usuario = str_usuario;
    this.str_terminal = str_terminal;
    this.str_sesion = str_sesion;
    this.str_mac = str_mac;
  }

  int_ente?: number;
  int_tipo_identifica?: number;
  str_num_identifica?: string;
  str_documento_id?: string;
  str_referencia?: string;
  str_tipo_documento?: string;
  str_subtipo_documento?: string;
  int_sistema?: number;
  int_oficina?: number;
  int_perfil?: number;
  str_path_repositorio?: string;
  str_modelo_doc_alfresco?: string;
  str_nombre?: string;
  str_observacion?: string;
  str_doc_extencion?: string;
  file_bytes: string;
  dtt_metadatos: [];
  str_usuario?: string;
  str_terminal?: string;
  str_sesion?: string;
  str_mac?: string;
}
