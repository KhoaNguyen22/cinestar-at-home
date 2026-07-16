package k.com.cinestar.service;

import java.time.LocalDate;
import java.util.List;

import k.com.cinestar.dto.ShowInCinemaDTO;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;

import k.com.cinestar.entity.Show;
import k.com.cinestar.repository.ShowRepository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ShowService {
    private final ShowRepository showRepository;

    public List<ShowInCinemaDTO> findAllShowsByCinemaId(Integer cinemaId) {
        return showRepository.findShowsInCinemaByCinemaId(cinemaId);

    }


}
