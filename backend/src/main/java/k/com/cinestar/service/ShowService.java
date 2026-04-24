package k.com.cinestar.service;

import java.util.List;

import org.springframework.stereotype.Service;

import k.com.cinestar.entity.Show;
import k.com.cinestar.repository.ShowRepository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ShowService {
    private final ShowRepository showRepository;

    public List<Show> findAllShowsByCinemaId(Integer cinemaId) {
        return showRepository.findShowsByScreenCinemaId(cinemaId);
    }
}
