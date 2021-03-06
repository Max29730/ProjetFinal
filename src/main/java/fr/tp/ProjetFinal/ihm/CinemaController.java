package fr.tp.ProjetFinal.ihm;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import fr.tp.ProjetFinal.bll.CinemaManager;
import fr.tp.ProjetFinal.bll.CinemaManagerException;
import fr.tp.ProjetFinal.bo.Film;
import fr.tp.ProjetFinal.bo.Reservation;
import fr.tp.ProjetFinal.bo.Seance;

@Controller
public class CinemaController {

	@Autowired
	CinemaManager manager;

	@GetMapping("/index")
	public String index() {
		return "index";
	}

	@GetMapping("/reservations")
	public String reservations(Model model) {
		model.addAttribute("reservations", manager.getAllReservation());
		return "reservations";
	}

	@GetMapping("/add/{id}")
	public String add(@PathVariable("id") Integer seanceid, Model model) {
		Seance currentSeance = manager.getSeanceByID(seanceid);
		Reservation reservation = new Reservation(currentSeance);

		try {
			manager.addReservationAC(reservation, currentSeance);
		} catch (CinemaManagerException e) {
			model.addAttribute("bug", e.getMessage());
			model.addAttribute("seance", manager.getSeanceByID(seanceid));
			model.addAttribute("nombre", manager.getReservationSeance(manager.getSeanceByID(seanceid)).size());
			model.addAttribute("reservs", manager.getReservationSeance(manager.getSeanceByID(seanceid)));
			return "reserv";
		}
		return "redirect:/reserv/{id}";
	}

	@GetMapping("/show/{id}")
	public String show(@PathVariable("id") Integer id, Model model) {
		Seance seance = manager.getSeanceByID(id);
		model.addAttribute("seance", seance);
		model.addAttribute("nombre", manager.getReservationSeance(manager.getSeanceByID(id)).size());
		return "show";
	}

	@GetMapping("/seances")
	public String seances(Model model) {
		model.addAttribute("seances", manager.getAllSeance());
		return "seances";
	}

	@GetMapping("/delete/{id}")
	public String delete(@PathVariable("id") Integer reservid) {
		manager.delReservationById(reservid);
		return "redirect:/reservations";
	}

	@GetMapping("/reserv/{id}")
	public String getReservationSeance(@PathVariable("id") Integer seanceid, Model model) {
		model.addAttribute("seance", manager.getSeanceByID(seanceid));
		model.addAttribute("nombre", manager.getReservationSeance(manager.getSeanceByID(seanceid)).size());
		model.addAttribute("reservs", manager.getReservationSeance(manager.getSeanceByID(seanceid)));
		return "reserv";
	}

	@GetMapping("/films")
	public String getAllFilm(Model model) {
		model.addAttribute("films", manager.getAllFilm());
		return "films";
	}

	@GetMapping("nouveaufilm")
	public String nouveauFilm() {
		return "nouveaufilm";
	}
	
	@GetMapping("reserverseance")
	public String reserverSeance() {
		return "reserverseance";
	}

	@GetMapping("redirect")
	public String redirect(){
		return "redirect";
	}

}
