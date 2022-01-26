package fr.tp.ProjetFinal.bo;

import java.time.LocalDate;
import java.time.LocalTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "seances")
@Data
@NoArgsConstructor
public class Seance {

	@Id
	@Column(name = "id_seance")
	@GeneratedValue
	private int id;

	private Integer numero;

	@Column(name = "jour")
	private LocalDate jour;

	@Column(name = "heure")
	private LocalTime heure;

	@ManyToOne
	@JoinColumn(name = "id_film")
	private Film film;

	@ManyToOne
	@JoinColumn(name = "id_salle")
	private Salle salle;

}