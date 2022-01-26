package fr.tp.ProjetFinal.rest;

import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import fr.tp.ProjetFinal.bll.ReservationManager;
import fr.tp.ProjetFinal.bo.Film;
import fr.tp.ProjetFinal.bo.Reservation;


@RestController
public class ReservationWS {

	@Autowired
	private ReservationManager manager;

	@GetMapping("/films")
	public List<Film> getAllFilm() {
		return manager.getAllFilm();
	}

	@GetMapping("/reservation")
	public List<Reservation> getAllReservation() {
		return manager.getAllReservation();

	}
	
	@GetMapping("/test/{id}")
	public List<Reservation> getReservationSeance(@PathVariable("id") Integer seanceid){
		return manager.getReservationSeance(manager.getSeanceByID(seanceid));
	}

	@PostConstruct
	public void init() {
//		manager.addReservation(new Reservation(manager.getSeanceByID(4)));
	}

}
