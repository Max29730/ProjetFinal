package fr.tp.ProjetFinal.bll;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fr.tp.ProjetFinal.bo.Film;
import fr.tp.ProjetFinal.bo.Reservation;
import fr.tp.ProjetFinal.bo.Seance;
import fr.tp.ProjetFinal.dal.Filmdao;
import fr.tp.ProjetFinal.dal.Reservationdao;
import fr.tp.ProjetFinal.dal.Seancedao;


@Service
public class CinemaManagerImpl implements CinemaManager {
	@Autowired
	protected Reservationdao reservationdao;

	@Autowired
	protected Filmdao filmdao;

	@Autowired
	protected Seancedao seancedao;

	@Override
	public List<Film> getAllFilm() {

		return (List<Film>) filmdao.findAll();
	}

	@Transactional
	@Override
	public void addReservation(Reservation reservation) {
		reservationdao.save(reservation);
	}

	@Transactional
	@Override
	public void addReservationAC(Reservation reservation, Seance seance) throws CinemaManagerException {
		if (reservationdao.findAllBySeance(seance).size() == (seance.getSalle().getCapacite())) {
			throw new CinemaManagerException("Plus de places");
		}
		reservationdao.save(reservation);
	}

	@Override
	public List<Reservation> getAllReservation() {

		return (List<Reservation>) reservationdao.findAll();
	}

	@Override
	public void delReservationById(Integer id) {
		reservationdao.deleteById(id);

	}

	@Override
	public void modReservation(Reservation reservation) {
		// TODO Auto-generated method stub

	}

	@Override
	public Reservation getReservationById(Integer id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Seance getSeanceByID(Integer id) {
		return seancedao.findById(id).orElse(null);
	}

	@Override
	public List<Seance> getAllSeance() {
		return (List<Seance>) seancedao.findAll();
	}

	@Override
	public List<Reservation> getReservationSeance(Seance seance) {
		return reservationdao.findAllBySeance(seance);
	}

}
