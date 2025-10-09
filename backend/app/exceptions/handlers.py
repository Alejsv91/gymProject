from fastapi import Request
from fastapi.exceptions import RequestValidationError
from fastapi.responses import JSONResponse
import logging

logger = logging.getLogger("uvicorn.error")

async def validation_exception_handler(request: Request, exc: RequestValidationError):
    logger.error(f"Validation error in: {request.url}")
    for error in exc.errors():
        loc = " → ".join(str(x) for x in error['loc'])
        msg = error['msg']
        typ = error['type']
        logger.error(f"field: {loc} | Error: {msg} | type: {typ}")
    return JSONResponse(status_code=422, content={"detail": exc.errors()})
