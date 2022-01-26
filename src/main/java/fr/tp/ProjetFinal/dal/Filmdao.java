package fr.tp.ProjetFinal.dal;

import org.springframework.data.repository.CrudRepository;

import fr.tp.ProjetFinal.bo.Film;

public interface Filmdao extends CrudRepository<Film, Integer> {

}
