use meg_sistemas
go
if exists(select 1
		from sysobjects
		where id=object_id('dbo.get_InfoCliente')
		and type='P')
	drop procedure dbo.get_InfoCliente
go
create procedure get_InfoCliente
(
	@prm_cedula 	varchar(13)
)

as 

declare @ente int   
select @ente = en_ente from cobis..cl_ente where en_ced_ruc = @prm_cedula or p_pasaporte = @prm_cedula

select UPPER(en_nombre+" "+p_p_apellido+" "+ p_s_apellido) NOMBRES,      		      
			di_descripcion + ' ' +di_interseccion DIRECCION,
			di_num_casa NUM_CASA,
			te_valor TELEFONO,       
			ce_telefono CELULAR,
			en_ced_ruc CEDULA,      
		    ce_email CORREO
		    --pv_descripcion PROVINCIA,      
			--ci_descripcion CIUDAD
			

		from cobis..cl_ente, cobis..cl_direccion,cobis..cl_ciudad,cobis..cl_provincia,cobis..cl_telefono, megoapp..mgo_canales_electronicos
      
		where 	en_ente= @ente   
			and di_ente = en_ente      
			and di_direccion = 1      
			and pv_provincia = ci_provincia       
			and ci_ciudad = di_ciudad       
			and te_ente = di_ente      
			and te_direccion =1      
			and te_secuencial = (select max(te_secuencial) from cobis..cl_telefono where te_ente = @ente and te_direccion = 1)
			and ce_ente = en_ente
go
grant execute on get_InfoCliente to public /*dbo*/
go
