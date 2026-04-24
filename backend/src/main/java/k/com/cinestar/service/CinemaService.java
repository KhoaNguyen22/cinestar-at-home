package k.com.cinestar.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import k.com.cinestar.entity.Cinema;
import k.com.cinestar.repository.CinemaRepository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CinemaService {
    private final CinemaRepository cinemaRepository;

    public Optional<Cinema> findByCinemaId(Integer cinemaId) {
        return cinemaRepository.findById(cinemaId);
    }

    public List<Cinema> findAllCinemas() {
        return cinemaRepository.findAll();
    }
}
