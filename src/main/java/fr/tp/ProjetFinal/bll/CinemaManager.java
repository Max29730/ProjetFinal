package fr.tp.ProjetFinal.bll;
import java.util.List;

import fr.tp.ProjetFinal.bo.Film;
import fr.tp.ProjetFinal.bo.Reservation;
import fr.tp.ProjetFinal.bo.Seance;


public interface CinemaManager {

	public List<Film> getAllFilm();

	public void addReservation(Reservation reservation);

	public List<Reservation> getAllReservation();

	public Reservation getReservationById(Integer id);

	public void delReservationById(Integer id);

	public void modReservation(Reservation reservation);
	
	public Seance getSeanceByID(Integer id);
	
	public List<Seance> getAllSeance();
	
	public List<Reservation> getReservationSeance(Seance seance);

	void addReservationAC(Reservation reservation, Seance seance) throws CinemaManagerException;
	
}
