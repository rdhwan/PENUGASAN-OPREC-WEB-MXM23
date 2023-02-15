"""
Nth Prime Number
~Fathan Ridhwan
"""


def sieve_of_eratosthenes(n: int) -> int:
    """Mencari prime number ke-n mengunakan algoritma sieve_of_eratosthenes.

    Args:
        n (int): Index dari prime number yang akan dicari

    Returns:
        int: Prime number ke-n
    """

    primes = [True] * n * 100

    p = 2

    counter = 0

    # loop counter
    while counter < n:
        if primes[p]:
            counter += 1

            for i in range(p * p, n * 100, p):
                primes[i] = False

        p += 1

    return p - 1


if __name__ == "__main__":
    import argparse
    import time

    parser = argparse.ArgumentParser(
        prog="Nth prime number finder",
    )

    parser.add_argument(
        "integer",
        type=int,
        help="angka integer prime number ke-n yang akan dicari",
    )

    start = time.perf_counter()
    print(sieve_of_eratosthenes(parser.parse_args().integer))

    print(f"took : {time.perf_counter() - start} ")
