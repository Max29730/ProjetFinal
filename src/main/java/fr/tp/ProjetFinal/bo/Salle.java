package fr.tp.ProjetFinal.bo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "salles")
@Data
@NoArgsConstructor
public class Salle {

	@Id
	@Column(name = "id_salle")
	@GeneratedValue
	private int idSalle;

	@Column(name = "capacite")
	private int capacite;

	@Column(name = "numero")
	private String numero;

	@Column(name = "nom_salle")
	private String salle;

	@Column(name = "3D")
	private boolean tDimension;

	public Salle(int capacite, String numero, String salle, boolean tDimension) {
		super();
		this.capacite = capacite;
		this.numero = numero;
		this.salle = salle;
		this.tDimension = tDimension;
	}

}
