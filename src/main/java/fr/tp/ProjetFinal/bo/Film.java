package fr.tp.ProjetFinal.bo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "films")
@NoArgsConstructor
@Data
public class Film {

	@Id
	@Column(name = "id_film")
	@GeneratedValue
	private int idFilm;

	@Column(name = "film")
	private String film;

	@Column(name = "duree_minute")
	private double dureeMinute;

	// constructeur sans id
	public Film(String film, double dureeMinute) {
		super();
		this.film = film;
		this.dureeMinute = dureeMinute;
	}

}
