package k.com.cinestar.service;

import java.util.List;
import java.util.Optional;

import k.com.cinestar.dto.CinemaOptionDTO;
import k.com.cinestar.mapper.CinemaMapper;
import org.springframework.stereotype.Service;

import k.com.cinestar.entity.Cinema;
import k.com.cinestar.repository.CinemaRepository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CinemaService {
    private final CinemaRepository cinemaRepository;
    private final CinemaMapper cinemaMapper;
    public Optional<Cinema> findByCinemaId(Integer cinemaId) {
        return cinemaRepository.findById(cinemaId);
    }

    public List<CinemaOptionDTO> findAllCinemas() {



        return cinemaRepository.findAll().stream().map(cinemaMapper::toCinemaOptionDTO).toList();
    }
}
