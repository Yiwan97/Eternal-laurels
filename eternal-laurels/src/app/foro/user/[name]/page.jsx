function User(props) {
  return (
		<div>
			<div >
				<div>
					<Image imagen perfil/>
				</div>
				<h2>{props.name}</h2>
				<p>{props.descripcion}</p>
			</div>
			<div>{props.postUser}</div>
		</div>
	);
}

export default User;