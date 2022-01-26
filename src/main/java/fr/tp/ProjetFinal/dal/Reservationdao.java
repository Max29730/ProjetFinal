package fr.tp.ProjetFinal.dal;
import java.util.List;

import org.springframework.data.repository.CrudRepository;

import fr.tp.ProjetFinal.bo.Reservation;
import fr.tp.ProjetFinal.bo.Seance;


public interface Reservationdao extends CrudRepository<Reservation, Integer> {

	List<Reservation> findAllBySeance(Seance seance);

}
